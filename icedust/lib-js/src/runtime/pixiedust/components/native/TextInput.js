var InputFactory = require('./InputFactory');

var options = {
		elementType: 'textarea',
		typeAttributeValue: null
}

module.exports = InputFactory('Text', function(e, props, trigger){
	trigger(e.target.value);
}, options);