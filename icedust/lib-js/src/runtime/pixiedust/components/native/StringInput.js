var InputFactory = require('./InputFactory');

module.exports = InputFactory('String', function(e, props, trigger){
	trigger(e.target.value);
})