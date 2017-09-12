var _ = require('lodash');
var redux = require('redux');
var React = require('react');
var ReactDOMServer = require('react-dom/server');

var PixieDustProvider = require('./components/PixieDustProvider');

var defaultDebug = false;
var defaultOptionalActions = ['@@redux/init', '@@INIT', '@@redux/INIT'];

var uniqueId = 0;
function generateUniqueId(){ //simple number generator
  return "" + uniqueId++;
}


function makeReducer(actions, debug, optionalActions){
  if(debug === undefined){
    debug = defaultDebug;
  }

  if(optionalActions === undefined){
    optionalActions = defaultOptionalActions;
  }

  var stateUpdateActionPattern = /^cacheUpdate(\[.+\])$/;
  
  function reducer(state, message){
    if(stateUpdateActionPattern.test(message.type)){
    	return message.updatedState;
    }
    
  	var action = actions[message.type];
    if(action !== undefined){
      state = action(state, message)
    } else if(message.type !== undefined){
      if(optionalActions.indexOf(message.type) == -1){
        console.warn('unknown action: ' + message.type)
      }
    } else{
      console.warn('no message type is given')
    }
    if(state == undefined){
      throw new Error('state became empty after action ' + message.type);
    }
    return state;
  }

  if(debug) {
    return function(state, message){
      console.time(message.type);
      var result = reducer(state, message);
      console.timeEnd(message.type);
      return result;
    }
  }
  return reducer;
}


function makeStore(reducer, initialState){
  try{
    var devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
    return redux.createStore(reducer, initialState, devtools);
  } catch(e){
    return redux.createStore(reducer, initialState);
  }
}

function castViewToString(store, view){
	var wrapped = React.createElement(PixieDustProvider, 
		{
			store: store
		}, 
		view
	);
	return ReactDOMServer.renderToStaticMarkup(wrapped);
}

module.exports = {
  generateUniqueId: generateUniqueId,
  makeReducer: makeReducer,
  makeStore: makeStore,
  castViewToString: castViewToString
};