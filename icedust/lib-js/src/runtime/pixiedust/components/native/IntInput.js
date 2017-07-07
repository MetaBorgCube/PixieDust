var InputFactory = require('./InputFactory');

module.exports = InputFactory('Int', function(e, props, trigger){
	var value = e.target.value;
  var integerValue = value == '' ? 0 : parseInt(e.target.value, 10);
  if(!isNaN(integerValue) && integerValue !== props.value){
  	trigger(integerValue);
  }
});