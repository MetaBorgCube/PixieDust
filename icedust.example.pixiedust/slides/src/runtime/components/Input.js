var React = require('react');
var Class = require('jsface').Class;
var _ = require('lodash');

var PixieDustComponent = require('pixiedust/components/PixieDustComponent');
var Functions = require('lib/functions');


var defaultOptions = {
  elementType: 'input',
  typeAttributeValue: 'text',
  onChangeAttribute: 'onChange',
  onSubmitAttribute: 'onSubmit',
  onKeyPressAttribute: 'onKeyPress',
  valueAttribute: 'value',
  valueProp: 'value'
};


function InputFactory(name, filter, options, extraProps){
  options = options === undefined ? defaultOptions : _.assign({}, defaultOptions, options);

  function constructor(props){
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.trigger = this.trigger.bind(this);
  }

  var Input = Class(PixieDustComponent, {
    constructor: constructor,

    onChange: function(e){
      filter(e, this.props, this.trigger);
    },

    onSubmit: function(e) {
      if(e.key == 'Enter'){
        this.props[options.onSubmitAttribute](this.props.value)();
      }
    },

    trigger: function(value){
      var identity = this.props[options.valueProp + '$identity'];
      var setter = this.props[options.valueProp + '$setter'];
      var msg = setter(identity, value);
      this.dispatch(msg);
    },

    render: function(){
      var attributes = {};
      var typeValue = options.typeAttributeValue;
      if(typeValue !== null){
        attributes.type = options.typeAttributeValue;
      }
      var value = this.props[options.valueProp];
      if(value == null){
        value = '';
      }

      var extraAttributes = _.assign({}, extraProps, _.omit(this.props, [
        options.onChangeAttribute,
        options.onSubmitAttribute,
        options.onKeyPressAttribute,
        options.valueProp,
        options.valueProp + '$setter',
        options.valueProp + '$identity',
      ]));

      attributes[options.valueAttribute] = value;
      attributes[options.onChangeAttribute] = this.onChange;
      if(this.props[options.onSubmitAttribute]){
        attributes[options.onKeyPressAttribute] = this.onSubmit;
      }
      attributes = _.assign(attributes, extraAttributes);
      return React.createElement(options.elementType, attributes);
    }
  });

  Functions.tryRenameFunctionName(Input, 'Input[' + name + ']');

  return Input;
}

function getTargetValue(e){
  return e.target.value;
}

function getTargetChecked(e){
  return e.target.checked
}

function successFilter(v) {
  return [v];
}

var stringFilter = successFilter;

function intFilter(v) {
  var i = parseInt(v, 10);
  return isNaN(i) ? [] : [i];
}

function floatFilter(v) {
  var floatValue = parseFloat(v, 10);
  return isNaN(floatValue) ? [] : [floatValue];
}

var booleanFilter = successFilter;

function makeOptional(filter) {
  return function(v) {
    return v == '' ? [null] : filter(v);
  }
}

function makeTrigger(prop, get, filter) {
  return function(e, props, trigger) {
    var previousValue = props[prop];
    filter(get(e)).forEach(function(v) {
      if(v !== previousValue){
        trigger(v);
      }
    })
  }
}

var stringTrigger = makeTrigger('value', getTargetValue, successFilter);
var optStringTrigger = makeTrigger('value', getTargetValue, makeOptional(successFilter))

var intTrigger = makeTrigger('value', getTargetValue, intFilter);
var optIntTrigger = makeTrigger('value', getTargetValue, makeOptional(intFilter));

var floatTrigger = makeTrigger('value', getTargetValue, floatFilter);
var optFloatTrigger = makeTrigger('value', getTargetValue, makeOptional(floatFilter));

var booleanTrigger = makeTrigger('value', getTargetChecked, successFilter);
var optBooleanTrigger = makeTrigger('value', getTargetChecked, makeOptional(successFilter));


var StringInput = InputFactory('String', stringTrigger);
var OptStringInput = InputFactory('String?', optStringTrigger);

var BooleanInput = InputFactory('Boolean', booleanTrigger,
  {
    typeAttributeValue: 'checkbox',
    valueAttribute: 'checked'
  }
);

var OptBooleanInput = InputFactory('Boolean?', optBooleanTrigger,
  {
    typeAttributeValue: 'checkbox',
    valueAttribute: 'checked'
  }
);

var IntInput = InputFactory('Int', intTrigger);
var OptIntInput = InputFactory('Int?', optIntTrigger);

var FloatInput = InputFactory('Float', floatTrigger);
var OptFloatInput = InputFactory('Float', optFloatTrigger);

var TextInput = InputFactory('Text', stringTrigger,
  {
    elementType: 'textarea',
    typeAttributeValue: null
  }
);

var OptTextInput = InputFactory('Text?', optStringTrigger,
  {
    elementType: 'textarea',
    typeAttributeValue: null
  }
);

var AutoFocusStringInput = Class(PixieDustComponent, {

  constructor: function AutoFocusStringInput(props){
    this.doFocus = this.doFocus.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  },

  componentDidUpdate: function(prevProps){
    if(!prevProps.visible && this.props.visible){
      this.doFocus();
    }
  },

  doFocus: function(){
    var node = this.refs.input;
    node.focus();
    node.setSelectionRange(node.value.length, node.value.length);
  },

  onChange: function(e) {
    this.dispatch(this.props.value$setter(this.props.value$identity, e.target.value))
  },

  onKeyPress: function(e) {
    if(e.key == 'Enter'){
      this.onSubmit()
    }
  },

  onSubmit: function(){
    this.props.onSubmit()();
  },

  render: function(){
    return React.createElement('input', {
      type: 'text',
      ref: 'input',
      value: this.props.value,
      className: this.props.className,
      onChange: this.onChange,
      onBlur: this.onSubmit,
      onKeyPress: this.onKeyPress
    });
  }
});

var KeyboardListener = Class(React.Component, {

  constructor: function KeyboardListener(){
    this.callback = this.callback.bind(this);
  },

  callback: function(e){
    var action = this.props['on' + e.key];
    if(action !== undefined && action !== null){
      action()();
    }
  },

  componentDidMount: function(){
    document.addEventListener('keydown', this.callback);
  },

  componentWillUnmount: function(){
    document.removeEventListener('keydown', this.callback);
  },

  render: function(){return null;}
});

var Trigger = Class(React.Component, {
  constructor: function Trigger(){
    this.trigger = this.trigger.bind(this);
  },

  componentWillMount: function(){
    this.trigger();
  },

  trigger: function(){
    var action = this.props.action;
    if(action !== undefined && action !== null){
      action()();
    }
  },

  render: function(){
    return null;
  }
});

module.exports = {
  InputFactory: InputFactory,

  getTargetValue: getTargetValue,
  getTargetChecked: getTargetChecked,

  successFilter: successFilter,
  stringFilter: stringFilter,
  intFilter: intFilter,
  floatFilter: floatFilter,
  booleanFilter: booleanFilter,

  stringTrigger: stringTrigger,
  optStringTrigger: optStringTrigger,

  intTrigger: intTrigger,
  optIntTrigger: optIntTrigger,

  floatTrigger: floatTrigger,
  optFloatTrigger: optFloatTrigger,

  booleanTrigger: booleanTrigger,
  optBooleanTrigger: optBooleanTrigger,

  makeOptional: makeOptional,
  makeTrigger: makeTrigger,

  StringInput: StringInput,
  OptStringInput: OptStringInput,

  IntInput: IntInput,
  OptIntInput: OptIntInput,

  FloatInput: FloatInput,
  OptFloatInput: OptFloatInput,

  BooleanInput: BooleanInput,
  OptBooleanInput: OptBooleanInput,

  TextInput: TextInput,
  OptTextInput: OptTextInput,

  AutoFocusStringInput: AutoFocusStringInput,

  KeyboardListener: KeyboardListener,

  Trigger: Trigger
};
