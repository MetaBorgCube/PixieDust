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
}


function InputFactory(name, filter, options){
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
			
			var extraAttributes = _.omit(this.props, [
				options.onChangeAttribute,
				options.onSubmitAttribute,
				options.onKeyPressAttribute,
				options.valueProp,
				options.valueProp + '$setter',
				options.valueProp + '$identity',
			]);
			
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


var StringInput = InputFactory('String', 
	function(e, props, trigger){
		trigger(e.target.value);
	}
);


var BooleanInput = InputFactory('Boolean', 
	function(e, props, trigger){
		trigger(e.target.checked);
	}, 
	{
		typeAttributeValue: 'checkbox',
		valueAttribute: 'checked'
	}
);


var IntInput = InputFactory('Int',
	function(e, props, trigger){
		var value = e.target.value;
	  var integerValue = value == '' ? 0 : parseInt(e.target.value, 10);
	  if(!isNaN(integerValue) && integerValue !== props.value){
	  	trigger(integerValue);
	  }
	}
);


var FloatInput = InputFactory('Float', 
	function(e, props, trigger){
		var value = e.target.value;
	  var floatValue = value == '' ? 0 : parseFloat(e.target.value);
	  if(!isNaN(floatValue) && floatValue !== props.value){
	  	trigger(floatValue);
	  }
	}
);


var OptFloatInput = InputFactory('Float?',
	function(e, props, trigger){
		var value = e.target.value;
		var floatValue = value == '' ? null : parseFloat(e.target.value);
		if(!isNaN(floatValue) && floatValue !== props.value){
			trigger(floatValue);
		}
	}
);


var TextInput = InputFactory('Text', 
	function(e, props, trigger){
		trigger(e.target.value);
	}, 
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

module.exports = {
		StringInput: StringInput,
		BooleanInput: BooleanInput,
		IntInput: IntInput,
		FloatInput: FloatInput,
		OptFloatInput: OptFloatInput,
		TextInput: TextInput,
		AutoFocusStringInput: AutoFocusStringInput
};

