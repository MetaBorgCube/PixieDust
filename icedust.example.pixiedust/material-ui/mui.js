var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Lifted = require('pixiedust/components/Lifted');
var pixiedustRuntime = require('pixiedust/runtime');
var imports = {
  "Mui" : require("material-ui"),
  "Input" : require("../components/inputs")
};
var expression = require('expression');
var constants = require('pixiedust-constants');
var _ = require('lodash');
var moment = require('moment');
var immutable = require('immutable');
var pixiedustRuntime = require('pixiedust/runtime');
var scope = constants.EMPTY_OBJECT;
var emptyState = immutable.Map({
  "AppState" : immutable.Map()
});
module.exports.emptyState = emptyState;
function getAppState_drawerOpen(state,id) {
  var result = state.get("AppState").get(id);
  if(result === undefined) {
    result = null;
  }
  if(result != null) {
    result = result.drawerOpen;
    if(result === undefined) {
      result = null;
    }
  }
  return result;
}

module.exports.getAppState_drawerOpen = getAppState_drawerOpen;
function getAppState_drawerOpen_Many(state,ids) {
  var result = [];
  var table = state.get("AppState");
  for (var i = 0 ; i < ids.length ; i++) {
    var value = table.get(ids[i]);
    if(value != null) {
      value = value.drawerOpen;
      if(value === undefined) {
        value = null;
      }
    }
    result.push(value);
  }
  return result;
}

module.exports.getAppState_drawerOpen_Many = getAppState_drawerOpen_Many;
function setAppState_drawerOpen(state,id,value) {
  state = invalidateAppState_drawerOpen(state,id);
  var prop = {
    drawerOpen : value
  };
  state = state.update("AppState",function (table) {
          return table.update(id,function (e) {
                  return _.assign({
                  },e,prop);
              });
      });
  return state;
}

module.exports.setAppState_drawerOpen = setAppState_drawerOpen;
function invalidateAppState_drawerOpen(state,id) {
  return state;
}

module.exports.invalidateAppState_drawerOpen = invalidateAppState_drawerOpen;
function init(state) {
  var appState = {
    id : "appState"
  };
  state = state.update("AppState",function (table) {
          return table.set(appState.id,appState);
      });
  state = setAppState_drawerOpen(state,appState.id,false);
  return {
    state : state,
    ids : {
      appState : appState.id
    }
  };
}

module.exports.init = init;
function execute(store,ids) {
  var result = [];
  var oldScope = scope;
   ( function () {
          var scope = _.assign({
          },oldScope,ids);
           ( function () {
                  function calculation(state) {
                    var _0 = React.createElement(Component.Main,{
                      appState : scope.appState
                    });
                    return {
                      result : _0,
                      state : state
                    };
                  }
                  
                  var calc = calculation(store.getState());
                  state = calc.state;
                  result = result.concat([{
                    type : "View",
                    multiplicity : "1",
                    expression : "@Main(appState) {\n}",
                    value : calc.result,
                    calculation : calculation
                  }]);
              } ) ();
           ( function () {
                  function calculation(state) {
                    var _0 = React.createElement(Component.Main,{
                      appState : scope.appState
                    });
                    return {
                      result : _0,
                      state : state
                    };
                  }
                  
                  var calc = calculation(store.getState());
                  state = calc.state;
                  result = result.concat([{
                    type : "View",
                    multiplicity : "1",
                    expression : "@Main(appState) {\n}",
                    value : calc.result,
                    calculation : calculation
                  }]);
              } ) ();
           ( function () {
                  function calculation(state) {
                    var _1 ;
                    var _0 = getAppState_drawerOpen(state,scope.appState);
                    if(_0) {
                      _1 = "Yes";
                    } else {
                      _1 = "No";
                    }
                    return {
                      result : _1,
                      state : state
                    };
                  }
                  
                  var calc = calculation(store.getState());
                  state = calc.state;
                  result = result.concat([{
                    type : "String",
                    multiplicity : "1",
                    expression : "if(appState.drawerOpen) \"Yes\" else \"No\"",
                    value : calc.result,
                    calculation : calculation
                  }]);
              } ) ();
      } ) ();
  return result;
}

module.exports.execute = execute;
var actions = {
  "init" : function (state) {
          state = state === undefined ? emptyState : state;
          return init(state).state;
      },
  "state_update" : function (state,action) {
          return action.newState;
      },
  "setAppState_drawerOpen" : function (state,action) {
          return setAppState_drawerOpen(state,action.id,action.value);
      },
  "createAppState" : function (state,action) {
          var entity = action.entity;
          var instance = {
            "id" : entity.id,
            "drawerOpen" : entity.drawerOpen === undefined ? null : entity.drawerOpen
          };
          state = state.update("AppState",function (table) {
                  return table.set(instance.id,instance);
              });
          return state;
      }
};
module.exports.actions = actions;
var actionCreators = {
  "init" : function () {
          return {
            type : "init"
          };
      },
  "state_update" : function (newState) {
          return {
            type : "state_update",
            newState : newState
          };
      },
  "setAppState_drawerOpen" : function (id,value) {
          return {
            type : "setAppState_drawerOpen",
            id : id,
            value : value
          };
      },
  "createAppState" : function (entity) {
          return {
            type : "createAppState",
            entity : entity
          };
      }
};
module.exports.actionCreators = actionCreators;
var reducer = pixiedustRuntime.makeReducer(actions);
module.exports.reducer = reducer;
var Component =  ( function () {
        var oldScope = scope;
        return {
          RightDrawer : Lifted(function RightDrawer(props,state) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _0 = React.createElement(imports["Mui"].Drawer,{
                    open : scope.open,
                    openSecondary : true
                  },scope.children);
                  return {
                    result : _0,
                    state : state
                  };
              }),
          MainBar : Lifted(function MainBar(props,state) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _0 = React.createElement(imports["Mui"].AppBar,{
                    title : "Hello world"
                  });
                  return {
                    result : _0,
                    state : state
                  };
              }),
          DatePicker : Lifted(function DatePicker(props,state) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _0 = React.createElement(imports["Mui"].DatePicker,{
                    value : scope.d,
                    hintText : "Some date field",
                    container : "inline"
                  });
                  return {
                    result : _0,
                    state : state
                  };
              }),
          Main : Lifted(function Main(props,state) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _4 = getAppState_drawerOpen(state,scope.appState);
                  var _3 = React.createElement(imports["Input"].BooleanInput,{
                    value$identity :  ( function () {
                            return scope.appState;
                        } ) (),
                    value$setter : actionCreators["setAppState_drawerOpen"],
                    value : _4
                  });
                  var _5 = React.createElement(Component.MainBar,{
                  });
                  var _7 = getAppState_drawerOpen(state,scope.appState);
                  var _6 = React.createElement(Component.RightDrawer,{
                    open : _7
                  },"Hello world!");
                  var _8 = React.createElement(Component.DatePicker,{
                    d : moment("2012-01-01 20:00:00")
                  });
                  var _1 = React.createElement("div",{
                  },_3,_5,_6,_8);
                  var _0 = React.createElement(imports["Mui"].MuiThemeProvider,{
                  },_1);
                  return {
                    result : _0,
                    state : state
                  };
              }),
          Drawer : Lifted(function Drawer(props,state) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _0 = React.createElement(imports["Mui"].Drawer,{
                    open : scope.open,
                    openSecondary : null
                  },scope.children);
                  return {
                    result : _0,
                    state : state
                  };
              })
        };
    } ) ();
module.exports.Component = Component;