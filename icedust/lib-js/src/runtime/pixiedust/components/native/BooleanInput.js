var InputFactory = require('./InputFactory');

var options = {
		typeAttributeValue: 'checkbox',
		valueAttribute: 'checked',
};

module.exports = InputFactory('Boolean', function(e, props, trigger){
	trigger(e.target.checked);
}, options);