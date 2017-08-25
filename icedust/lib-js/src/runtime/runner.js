var loadModule = require('./loadModule');
var _ = require('lodash');
var runtime = require('./pixiedust/runtime');
var React = require('react');
var ReactDOM = require('react-dom');
var PixieDustProvider = require('pixiedust/components/PixieDustProvider');
var Result = require('pixiedust/components/Result');

function runner(program, display){
  var module = loadModule(program);
  var state = module.emptyState;
  var init = module.init(state);
  var store = runtime.makeStore(module.reducer, init.state);
  var result = module.execute(store, init.ids);
  display(store, result);
}

function valueToString(value){
  if(_.isArray(value)){
    return '[' + _.toString(value) + ']';
  } else if(_.isPlainObject(value)){
    return JSON.stringify(value);
  } else{
    return '' + value;
  }
}

function displayToConsole(store, result){
	for(var i = 0 ; i < result.length ; i++){
    console.log(valueToString(result[i].value));
  }
}

function displayToHtml(container){
	return function(store, result){
		var element = React.createElement(
		    PixieDustProvider,
		    {
		      store: store
		    },
		      React.createElement(
		        Result,
		        {
		          result: result
		        }
		      )
		    );
	  ReactDOM.render(element, container);
	  console.log('result', result);
	  console.log('state', store.getState().toJS());
	}
}

module.exports = {
	runner: runner,
	displayToConsole: displayToConsole,
	displayToHtml: displayToHtml
}