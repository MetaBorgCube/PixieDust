var InputFactory = require('./InputFactory');

module.exports = InputFactory('Float?', function(e, props, trigger){
	var value = e.target.value;
  var floatValue = value == '' ? null : parseFloat(e.target.value);
  if(!isNaN(floatValue) && floatValue !== props.value){
  	trigger(floatValue);
  }
})