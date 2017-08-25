var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Lifted = require('pixiedust/components/Lifted');
var pixiedustRuntime = require('pixiedust/runtime');
var imports = {
  "Native" : require("react-bootstrap")
};
var expression = require('expression');
var constants = require('pixiedust-constants');
var _ = require('lodash');
var moment = require('moment');
var immutable = require('immutable');
var pixiedustRuntime = require('pixiedust/runtime');
var scope = constants.EMPTY_OBJECT;
var emptyState = immutable.Map({
});
module.exports.emptyState = emptyState;
function init(state) {
  return {
    state : state,
    ids : {
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
                    expression : "@Main() {\n}",
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
      }
};
module.exports.actionCreators = actionCreators;
var reducer = pixiedustRuntime.makeReducer(actions);
module.exports.reducer = reducer;
var Component =  ( function () {
        var oldScope = scope;
        return {
          LargeButton : Lifted(function LargeButton(props,state) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _0 = React.createElement(imports["Native"].Button,{
                    bsSize : "large",
                    bsStyle : null
                  },scope.children);
                  return {
                    result : _0,
                    state : state
                  };
              }),
          Main : Lifted(function Main(props,state) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _3 = React.createElement(Component.Button,{
                  },"b1");
                  var _4 = React.createElement(Component.MaybePrimaryButton,{
                    isPrimary : false
                  },"b2");
                  var _5 = React.createElement(Component.MaybePrimaryButton,{
                    isPrimary : true
                  },"b3");
                  var _2 = React.createElement(imports["Native"].ButtonGroup,{
                  },_3,_4,_5);
                  var _0 = React.createElement("div",{
                  },_2);
                  var _9 = React.createElement(Component.LargeButton,{
                  },"B1");
                  var _10 = React.createElement(Component.LargeButton,{
                  },"B2");
                  var _11 = React.createElement(Component.LargePrimaryButton,{
                  },"B3");
                  var _8 = React.createElement(imports["Native"].ButtonGroup,{
                  },_9,_10,_11);
                  var _6 = React.createElement("div",{
                  },_8);
                  var _12 = React.createElement(Component.Warning,{
                    message : "Watch out!"
                  });
                  var _13 = React.createElement(imports["Native"].Glyphicon,{
                    glyph : "ok"
                  });
                  var _15 = React.createElement(imports["Native"].ControlLabel,{
                  },"Checkbox");
                  var _16 = React.createElement(imports["Native"].Checkbox,{
                    checked : true
                  });
                  var _14 = React.createElement(imports["Native"].FormGroup,{
                    controlId : "checkboxChecked"
                  },_15,_16);
                  var _18 = React.createElement(imports["Native"].ControlLabel,{
                  },"Checkbox(unchecked)");
                  var _19 = React.createElement(imports["Native"].Checkbox,{
                    checked : false
                  });
                  var _17 = React.createElement(imports["Native"].FormGroup,{
                    controlId : "checkboxUnchecked"
                  },_18,_19);
                  var _21 = React.createElement(imports["Native"].ControlLabel,{
                  },"Input");
                  var _22 = React.createElement(imports["Native"].FormControl,{
                    value : "Input Text"
                  });
                  var _20 = React.createElement(imports["Native"].FormGroup,{
                    controlId : "inputText"
                  },_21,_22);
                  var _23 = React.createElement(Component.Error,{
                    message : "Something bad happened"
                  });
                  return {
                    result : React.createElement('group',{
                    },_0,_6,_12,_13,_14,_17,_20,_23),
                    state : state
                  };
              }),
          Button : Lifted(function Button(props,state) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _0 = React.createElement(imports["Native"].Button,{
                    bsSize : null,
                    bsStyle : null
                  },scope.children);
                  return {
                    result : _0,
                    state : state
                  };
              }),
          LargePrimaryButton : Lifted(function LargePrimaryButton(props,state) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _0 = React.createElement(imports["Native"].Button,{
                    bsSize : "large",
                    bsStyle : "primary"
                  },scope.children);
                  return {
                    result : _0,
                    state : state
                  };
              }),
          Alert : Lifted(function Alert(props,state) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _0 = React.createElement(imports["Native"].Alert,{
                    bsStyle : null
                  },scope.children);
                  return {
                    result : _0,
                    state : state
                  };
              }),
          Warning : Lifted(function Warning(props,state) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _0 = React.createElement(imports["Native"].Alert,{
                    bsStyle : "warning"
                  },scope.message);
                  return {
                    result : _0,
                    state : state
                  };
              }),
          Error : Lifted(function Error(props,state) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _0 = React.createElement(imports["Native"].Alert,{
                    bsStyle : "danger"
                  },scope.message);
                  return {
                    result : _0,
                    state : state
                  };
              }),
          MaybePrimaryButton : Lifted(function MaybePrimaryButton(props,state) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _1 ;
                  if(scope.isPrimary) {
                    _1 = "primary";
                  } else {
                    _1 = null;
                  }
                  var _0 = React.createElement(imports["Native"].Button,{
                    bsSize : null,
                    bsStyle : _1
                  },scope.children);
                  return {
                    result : _0,
                    state : state
                  };
              })
        };
    } ) ();
module.exports.Component = Component;