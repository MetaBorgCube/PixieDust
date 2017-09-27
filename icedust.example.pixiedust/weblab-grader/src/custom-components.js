var React = require('react');

var mui = require('material-ui');
var Class = require('jsface').Class;

var inputs = require('pixiedust/components/native/inputs');
var InputFactory = inputs.InputFactory;


var DateTimePicker = Class(React.Component, {
  constructor: function DateTimePicker(props) {
    this.onChangeTime = this.onChangeTime.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
  },


  onChangeTime: function(e, date){
    this.props.onChange(date)();
  },

  onChangeDate: function(e, date) {
    var previousDate = this.props.value;

    if(previousDate !== null && previousDate !== undefined){
      date.setHours(previousDate.getHours());
      date.setMinutes(previousDate.getMinutes());
      date.setSeconds(previousDate.getSeconds());
      date.setMilliseconds(previousDate.getMilliseconds());
    }

    this.props.onChange(date)();
  },

  renderBody: function(){
    var value = this.props.value;
    return [
      React.createElement(mui.DatePicker, {
        onChange: this.onChangeDate,
        floatingLabelText: this.props.floatingLabelText,
        value: value
      }),
      React.createElement(mui.TimePicker, {
        onChange: this.onChangeTime,
        format: '24hr',
        value:  value
      })
    ];
  },

  render: function(){
    return React.createElement.apply(null, ['div', {}].concat(this.renderBody()));
  }
});

var OptDateTimePicker = Class(DateTimePicker, {
  constructor: function OptDateTimePicker(props){
    OptDateTimePicker.$super.call(this, props);
    this.removeDate = this.removeDate.bind(this);
  },

  removeDate: function(){
    this.props.onChange(null)();
  },

  renderBody: function(){
    var result = OptDateTimePicker.$superp.renderBody.call(this);
    if(this.props.value !== null && this.props.value !== undefined){
      result.push(
        React.createElement('div',
          {
            style: {
              position: 'relative',
              top: '-96px',
              left: '200px',
              height: 0
            }
          },
          React.createElement(mui.IconButton,
            {
              onClick: this.removeDate
            },
            React.createElement(mui.FontIcon, {className: 'material-icons'}, "clear")
          )
        )
      );
    }

    return result;
  }
});

var StringInput = InputFactory('String', inputs.stringTrigger, {
  elementType: mui.TextField
});

var OptStringInput = InputFactory('String?', inputs.optStringTrigger, {
  elementType: mui.TextField
});


var IntInput = InputFactory('Int', inputs.intTrigger, {
  elementType: mui.TextField
});

var OptIntInput = InputFactory('Int?', inputs.optIntTrigger, {
  elementType: mui.TextField
});

var FloatInput = InputFactory('Float', inputs.floatTrigger, {
  elementType: mui.TextField
});

var OptFloatInput = InputFactory('Float?', inputs.optFloatTrigger, {
  elementType: mui.TextField
});

var BooleanInput = InputFactory('Boolean', inputs.booleanTrigger, {
  elementType: mui.Checkbox
});

var OptBooleanInput = InputFactory('Boolean?', inputs.optBooleanTrigger, {
  elementType: mui.Checkbox
});

var TextInput = InputFactory('Text', inputs.stringTrigger, {
  elementType: mui.TextField
}, {
  multiLine: true
});

var OptTextInput = InputFactory('Text?', inputs.optStringTrigger, {
  elementType: mui.TextField
}, {
  multiLine: true
});



module.exports = {
  DateTimePicker: DateTimePicker,
  OptDateTimePicker: OptDateTimePicker,

  StringInput: StringInput,
  OptStringInput: OptStringInput,

  IntInput: IntInput,
  OptIntInput: OptIntInput,

  FloatInput: FloatInput,
  OptFloatInput: OptFloatInput,

  BooleanInput: BooleanInput,
  OptBooleanInput: OptBooleanInput,

  TextInput: TextInput,
  OptTextInput: OptTextInput
};