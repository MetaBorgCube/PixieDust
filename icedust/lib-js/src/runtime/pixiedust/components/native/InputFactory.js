var React = require('react');
var PixieDustComponent = require('../PixieDustComponent');
var Class = require('jsface').Class;
var Functions = require('lib/functions');
var _ = require('lodash');

var defaultOptions = {
		elementType: 'input',
		typeAttributeValue: 'text',
		onChangeAttribute: 'onChange',
		valueAttribute: 'value',
		valueProp: 'value'
}

function InputFactory(name, filter, options){
	options = options === undefined ? defaultOptions : _.assign({}, defaultOptions, options);
	
	
	function constructor(props){
		this.onChange = this.onChange.bind(this);
		this.trigger = this.trigger.bind(this);
	}
	
	var Input = Class(PixieDustComponent, {
		constructor: constructor,
		
		onChange: function(e){
			filter(e, this.props, this.trigger);
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
			attributes[options.valueAttribute] = value;
			attributes[options.onChangeAttribute] = this.onChange;
			return React.createElement(options.elementType, attributes);
		}
	});
	
	Functions.tryRenameFunctionName(Input, 'Input[' + name + ']');
	
	return Input;
}

module.exports = InputFactory