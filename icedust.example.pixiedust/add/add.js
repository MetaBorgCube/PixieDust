var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Lifted = require('pixiedust/components/Lifted');
var pixiedustRuntime = require('pixiedust/runtime');
var imports = {
  "pixiedust/components/native/inputs" : require("pixiedust/components/native/inputs")
};
var expression = require('expression');
var constants = require('pixiedust-constants');
var _ = require('lodash');
var moment = require('moment');
var immutable = require('immutable');
var pixiedustRuntime = require('pixiedust/runtime');
var scoped = require('lib/scoped');
var scope = constants.EMPTY_OBJECT;
var emptyState = immutable.Map({
  "Add" : immutable.Map(),
  "Counter" : immutable.Map(),
  "Add_value" : immutable.Map(),
  "Add_lhs" : immutable.Map(),
  "Add_rhs" : immutable.Map(),
  "Counter_value" : immutable.Map(),
  "Counter_inverseLhs" : immutable.Map(),
  "Counter_inverseRhs" : immutable.Map()
});
module.exports.emptyState = emptyState;
function getAdd_value(state,id) {
  return state.get("Add_value").get(id);
}

module.exports.getAdd_value = getAdd_value;
function getAdd_value_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Add_value");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _2.get(ids[_3]);
    if(_4 !== undefined) {
      _0.push(_4);
    }
  }
  return _0;
}

module.exports.getAdd_value_Many = getAdd_value_Many;
function getAdd_lhs(state,id) {
  var _0 = state.get("Add_lhs").get(id);
  if(_0 === undefined) {
    _0 = null;
  }
  return _0;
}

module.exports.getAdd_lhs = getAdd_lhs;
function getAdd_lhs_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Add_lhs");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _2.get(ids[_3]);
    if(_4 !== undefined) {
      if(_4 !== undefined) {
        _0.push(_4);
      }
    }
  }
  return _0;
}

module.exports.getAdd_lhs_Many = getAdd_lhs_Many;
function getAdd_rhs(state,id) {
  var _0 = state.get("Add_rhs").get(id);
  if(_0 === undefined) {
    _0 = null;
  }
  return _0;
}

module.exports.getAdd_rhs = getAdd_rhs;
function getAdd_rhs_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Add_rhs");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _2.get(ids[_3]);
    if(_4 !== undefined) {
      if(_4 !== undefined) {
        _0.push(_4);
      }
    }
  }
  return _0;
}

module.exports.getAdd_rhs_Many = getAdd_rhs_Many;
function getCounter_value(state,id) {
  var _0 = state.get("Counter").get(id);
  if(_0 !== undefined) {
    _0 = _0.value;
    if(_0 === undefined || _0 === null) {
      _0 = state.get("Counter_value").get(id);
    }
  }
  return _0;
}

module.exports.getCounter_value = getCounter_value;
function getCounter_value_Many(state,ids) {
  var _0 = [];
  var _1 = state.get("Counter");
  var _2 = state.get("Counter_value");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _1.get(ids[_3]);
    if(_4 !== undefined) {
      _4 = _4.value;
      if(_4 === undefined) {
        _4 = _2.get(ids[_3]);
      }
      if(_4 !== undefined) {
        _0.push(_4);
      }
    }
  }
  return _0;
}

module.exports.getCounter_value_Many = getCounter_value_Many;
function getCounter_inverseLhs(state,id) {
  var _0 = state.get("Counter_inverseLhs").get(id);
  if(_0 === undefined) {
    _0 = constants.EMPTY_ARRAY;
  }
  return _0;
}

module.exports.getCounter_inverseLhs = getCounter_inverseLhs;
function getCounter_inverseLhs_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Counter_inverseLhs");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _2.get(ids[_3]);
    if(_4 !== undefined) {
      for (var _6 = 0 ; _6 < _4.length ; _6++) {
        var _5 = _4[_6];
        if(_5 !== null) {
          _0.push(_5);
        }
      }
    }
  }
  return _0;
}

module.exports.getCounter_inverseLhs_Many = getCounter_inverseLhs_Many;
function getCounter_inverseRhs(state,id) {
  var _0 = state.get("Counter_inverseRhs").get(id);
  if(_0 === undefined) {
    _0 = constants.EMPTY_ARRAY;
  }
  return _0;
}

module.exports.getCounter_inverseRhs = getCounter_inverseRhs;
function getCounter_inverseRhs_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Counter_inverseRhs");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _2.get(ids[_3]);
    if(_4 !== undefined) {
      for (var _6 = 0 ; _6 < _4.length ; _6++) {
        var _5 = _4[_6];
        if(_5 !== null) {
          _0.push(_5);
        }
      }
    }
  }
  return _0;
}

module.exports.getCounter_inverseRhs_Many = getCounter_inverseRhs_Many;
function setAdd_lhs(state,id,value) {
  state = invalidateAdd_lhs(state,id);
  var previousValue = getAdd_lhs(state,id);
  var table = state.get("Add_lhs").set(id,value);
  state = state.set("Add_lhs",table);
  var inverseTable = state.get("Counter_inverseLhs");
  if(value != null) {
    var addedId = value;
    state = invalidateCounter_inverseLhs(state,addedId);
    var inverseIds = inverseTable.get(addedId);
    if(inverseIds === undefined) {
      inverseIds = [id];
    } else {
      inverseIds = inverseIds.concat(id);
    }
    inverseTable = inverseTable.set(addedId,inverseIds);
  }
  if(previousValue != null) {
    var removedId = previousValue;
    state = invalidateCounter_inverseLhs(state,removedId);
    var inverseIds = inverseTable.get(removedId);
    if(inverseIds === undefined) {
      inverseIds = [];
    } else {
      inverseIds = _.without(inverseIds,id);
    }
    inverseTable = inverseTable.set(removedId,inverseIds);
  }
  state = state.set("Counter_inverseLhs",inverseTable);
  return state;
}

module.exports.setAdd_lhs = setAdd_lhs;
function setAdd_rhs(state,id,value) {
  state = invalidateAdd_rhs(state,id);
  var previousValue = getAdd_rhs(state,id);
  var table = state.get("Add_rhs").set(id,value);
  state = state.set("Add_rhs",table);
  var inverseTable = state.get("Counter_inverseRhs");
  if(value != null) {
    var addedId = value;
    state = invalidateCounter_inverseRhs(state,addedId);
    var inverseIds = inverseTable.get(addedId);
    if(inverseIds === undefined) {
      inverseIds = [id];
    } else {
      inverseIds = inverseIds.concat(id);
    }
    inverseTable = inverseTable.set(addedId,inverseIds);
  }
  if(previousValue != null) {
    var removedId = previousValue;
    state = invalidateCounter_inverseRhs(state,removedId);
    var inverseIds = inverseTable.get(removedId);
    if(inverseIds === undefined) {
      inverseIds = [];
    } else {
      inverseIds = _.without(inverseIds,id);
    }
    inverseTable = inverseTable.set(removedId,inverseIds);
  }
  state = state.set("Counter_inverseRhs",inverseTable);
  return state;
}

module.exports.setAdd_rhs = setAdd_rhs;
function setCounter_value(state,id,value) {
  state = invalidateCounter_value(state,id);
  var prop = {
    value : value
  };
  state = state.update("Counter",function (table) {
          return table.update(id,function (e) {
                  return _.assign({
                  },e,prop);
              });
      });
  return state;
}

module.exports.setCounter_value = setCounter_value;
function setCounter_inverseLhs(state,id,value) {
  state = invalidateCounter_inverseLhs(state,id);
  var previousValue = getCounter_inverseLhs(state,id);
  var table = state.get("Counter_inverseLhs").set(id,value);
  state = state.set("Counter_inverseLhs",table);
  var inverseTable = state.get("Add_lhs");
  var added = _.difference(value,previousValue);
  var removed = _.difference(previousValue,value);
  for (var i = 0 ; i < added.length ; i++) {
    var addedId = added[i];
    state = invalidateAdd_lhs(state,addedId);
    inverseTable = inverseTable.set(addedId,id);
  }
  for (var i = 0 ; i < removed.length ; i++) {
    var removedId = removed[i];
    state = invalidateAdd_lhs(state,removedId);
    inverseTable = inverseTable.remove(removedId);
  }
  state = state.set("Add_lhs",inverseTable);
  return state;
}

module.exports.setCounter_inverseLhs = setCounter_inverseLhs;
function setCounter_inverseRhs(state,id,value) {
  state = invalidateCounter_inverseRhs(state,id);
  var previousValue = getCounter_inverseRhs(state,id);
  var table = state.get("Counter_inverseRhs").set(id,value);
  state = state.set("Counter_inverseRhs",table);
  var inverseTable = state.get("Add_rhs");
  var added = _.difference(value,previousValue);
  var removed = _.difference(previousValue,value);
  for (var i = 0 ; i < added.length ; i++) {
    var addedId = added[i];
    state = invalidateAdd_rhs(state,addedId);
    inverseTable = inverseTable.set(addedId,id);
  }
  for (var i = 0 ; i < removed.length ; i++) {
    var removedId = removed[i];
    state = invalidateAdd_rhs(state,removedId);
    inverseTable = inverseTable.remove(removedId);
  }
  state = state.set("Add_rhs",inverseTable);
  return state;
}

module.exports.setCounter_inverseRhs = setCounter_inverseRhs;
function addCounter_inverseLhs(state,id,value) {
  var previousValue = getCounter_inverseLhs(state,id);
  var nextValue = previousValue.concat(value);
  return setCounter_inverseLhs(state,id,nextValue);
}

module.exports.addCounter_inverseLhs = addCounter_inverseLhs;
function addCounter_inverseRhs(state,id,value) {
  var previousValue = getCounter_inverseRhs(state,id);
  var nextValue = previousValue.concat(value);
  return setCounter_inverseRhs(state,id,nextValue);
}

module.exports.addCounter_inverseRhs = addCounter_inverseRhs;
function invalidateAdd_value(state,id) {
  state = state.update("Add_value",function (set) {
          return set.remove(id);
      });
  return state;
}

module.exports.invalidateAdd_value = invalidateAdd_value;
function invalidateAdd_lhs(state,id) {
  if(id != null) {
    state = invalidateAdd_value(state,id);
  }
  return state;
}

module.exports.invalidateAdd_lhs = invalidateAdd_lhs;
function invalidateAdd_rhs(state,id) {
  if(id != null) {
    state = invalidateAdd_value(state,id);
  }
  return state;
}

module.exports.invalidateAdd_rhs = invalidateAdd_rhs;
function invalidateCounter_value(state,id) {
  state = state.update("Counter_value",function (set) {
          return set.remove(id);
      });
  scoped(scope,{
    $this : id
  },function (scope) {
          var _0 = getCounter_inverseLhs(state,scope["$this"]);
          if(_0 != null) {
            for (var i = 0 ; i < _0.length ; i++) {
              state = invalidateAdd_value(state,_0[i]);
            }
          }
      });
  scoped(scope,{
    $this : id
  },function (scope) {
          var _0 = getCounter_inverseRhs(state,scope["$this"]);
          if(_0 != null) {
            for (var i = 0 ; i < _0.length ; i++) {
              state = invalidateAdd_value(state,_0[i]);
            }
          }
      });
  return state;
}

module.exports.invalidateCounter_value = invalidateCounter_value;
function invalidateCounter_inverseLhs(state,id) {
  return state;
}

module.exports.invalidateCounter_inverseLhs = invalidateCounter_inverseLhs;
function invalidateCounter_inverseRhs(state,id) {
  return state;
}

module.exports.invalidateCounter_inverseRhs = invalidateCounter_inverseRhs;
function calculateAdd_value(state,id) {
  var result = getAdd_value(state,id);
  if(result === undefined) {
    scoped(scope,{
      $this : id
    },function (scope) {
            var _1 = getAdd_lhs(state,scope["$this"]);
            var _2 ;
            if(_1 != null) {
              var calc = calculateCounter_value(state,_1);
              state = calc.state;
              _2 = calc.result;
            } else {
              _2 = null;
            }
            var _3 = getAdd_rhs(state,scope["$this"]);
            var _4 ;
            if(_3 != null) {
              var calc = calculateCounter_value(state,_3);
              state = calc.state;
              _4 = calc.result;
            } else {
              _4 = null;
            }
            var _5 = _2 !== null && _4 !== null ? _2 + _4 : null;
            result = _5;
            state = state.update("Add_value",function (table) {
                    return table.set(id,_5);
                });
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateAdd_value = calculateAdd_value;
function calculateAdd_value_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateAdd_value(state,id);
    state = calc.state;
    if(calc.result !== null) {
      result.push(calc.result);
    }
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateAdd_value_Many = calculateAdd_value_Many;
function calculateCounter_value(state,id) {
  var result = getCounter_value(state,id);
  if(result === undefined) {
    scoped(scope,{
      $this : id
    },function (scope) {
            result = 0;
            state = state.update("Counter_value",function (table) {
                    return table.set(id,0);
                });
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateCounter_value = calculateCounter_value;
function calculateCounter_value_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateCounter_value(state,id);
    state = calc.state;
    if(calc.result !== null) {
      result.push(calc.result);
    }
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateCounter_value_Many = calculateCounter_value_Many;
function init(state) {
  var add = {
    id : "add"
  };
  state = state.update("Add",function (table) {
          return table.set(add.id,add);
      });
  var c1 = {
    id : "c1"
  };
  state = state.update("Counter",function (table) {
          return table.set(c1.id,c1);
      });
  var c2 = {
    id : "c2"
  };
  state = state.update("Counter",function (table) {
          return table.set(c2.id,c2);
      });
  state = setAdd_lhs(state,add.id,c1.id);
  state = setAdd_rhs(state,add.id,c2.id);
  return {
    state : state,
    ids : {
      add : add.id,
      c1 : c1.id,
      c2 : c2.id
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
                    var _0 = React.createElement(Component.Add,{
                      add : scope.add
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
                    expression : "@Add(add) {\n}",
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
  "setAdd_lhs" : function (state,action) {
          return setAdd_lhs(state,action.id,action.value);
      },
  "setAdd_rhs" : function (state,action) {
          return setAdd_rhs(state,action.id,action.value);
      },
  "setCounter_value" : function (state,action) {
          return setCounter_value(state,action.id,action.value);
      },
  "setCounter_inverseLhs" : function (state,action) {
          return setCounter_inverseLhs(state,action.id,action.value);
      },
  "addCounter_inverseLhs" : function (state,action) {
          return addCounter_inverseLhs(state,action.id,action.value);
      },
  "setCounter_inverseRhs" : function (state,action) {
          return setCounter_inverseRhs(state,action.id,action.value);
      },
  "addCounter_inverseRhs" : function (state,action) {
          return addCounter_inverseRhs(state,action.id,action.value);
      },
  "calculateAdd_value" : function (state,action) {
          return calculateAdd_value(state,action.id).state;
      },
  "calculateAdd_value_Many" : function (state,action) {
          return calculateAdd_value_Many(state,action.ids).state;
      },
  "calculateCounter_value" : function (state,action) {
          return calculateCounter_value(state,action.id).state;
      },
  "calculateCounter_value_Many" : function (state,action) {
          return calculateCounter_value_Many(state,action.ids).state;
      }
};
module.exports.actions = actions;
var actionCreators = {
  "init" : function () {
          return {
            type : "init"
          };
      },
  "setAdd_lhs" : function (id,value) {
          return {
            type : "setAdd_lhs",
            id : id,
            value : value
          };
      },
  "setAdd_rhs" : function (id,value) {
          return {
            type : "setAdd_rhs",
            id : id,
            value : value
          };
      },
  "setCounter_value" : function (id,value) {
          return {
            type : "setCounter_value",
            id : id,
            value : value
          };
      },
  "setCounter_inverseLhs" : function (id,value) {
          return {
            type : "setCounter_inverseLhs",
            id : id,
            value : value
          };
      },
  "addCounter_inverseLhs" : function (id,value) {
          return {
            type : "addCounter_inverseLhs",
            id : id,
            value : value
          };
      },
  "setCounter_inverseRhs" : function (id,value) {
          return {
            type : "setCounter_inverseRhs",
            id : id,
            value : value
          };
      },
  "addCounter_inverseRhs" : function (id,value) {
          return {
            type : "addCounter_inverseRhs",
            id : id,
            value : value
          };
      },
  "calculateAdd_value" : function (id) {
          return {
            type : "calculateAdd_value",
            id : id
          };
      },
  "calculateAdd_value_Many" : function (ids) {
          return {
            type : "calculateAdd_value_Many",
            id : ids
          };
      },
  "calculateCounter_value" : function (id) {
          return {
            type : "calculateCounter_value",
            id : id
          };
      },
  "calculateCounter_value_Many" : function (ids) {
          return {
            type : "calculateCounter_value_Many",
            id : ids
          };
      },
  "createAdd" : function (entity) {
          return {
            type : "createAdd",
            entity : entity
          };
      },
  "createCounter" : function (entity) {
          return {
            type : "createCounter",
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
          Add : Lifted(function Add(props,state,store) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _0 = React.createElement("button",{
                    onClick : scope["reset"]()
                  },"Reset");
                  var _3 = getAdd_lhs(state,scope.add);
                  var _4 ;
                  if(_3 != null) {
                    var calc = calculateCounter_value(state,_3);
                    state = calc.state;
                    _4 = calc.result;
                  } else {
                    _4 = null;
                  }
                  var _2 = React.createElement(imports["pixiedust/components/native/inputs"].IntInput,{
                    value$identity :  ( function () {
                            var _0 = getAdd_lhs(state,scope.add);
                            return _0;
                        } ) (),
                    value$setter : actionCreators["setCounter_value"],
                    value : _4
                  });
                  var _6 = getAdd_rhs(state,scope.add);
                  var _7 ;
                  if(_6 != null) {
                    var calc = calculateCounter_value(state,_6);
                    state = calc.state;
                    _7 = calc.result;
                  } else {
                    _7 = null;
                  }
                  var _5 = React.createElement(imports["pixiedust/components/native/inputs"].IntInput,{
                    value$identity :  ( function () {
                            var _0 = getAdd_rhs(state,scope.add);
                            return _0;
                        } ) (),
                    value$setter : actionCreators["setCounter_value"],
                    value : _7
                  });
                  var _8 ;
                  if(scope.add != null) {
                    var calc = calculateAdd_value(state,scope.add);
                    state = calc.state;
                    _8 = calc.result;
                  } else {
                    _8 = null;
                  }
                  return {
                    result : React.createElement('group',{
                    },_0,_2,"+",_5,"=",_8),
                    state : state
                  };
              },["reset"]),
          Counter : Lifted(function Counter(props,state,store) {
                  var scope = _.assign({
                  },oldScope,props);
                  return {
                    result : null,
                    state : state
                  };
              },["increment"])
        };
    } ) ();
module.exports.Component = Component;
function Add_reset(state,action) {
  var newState = state;
  scoped(scope,_.assign({
  },action.props,{
  }),function (scope) {
          scoped(scope,{
            $this : scope.add
          },function (scope) {
                  var _4 = getAdd_lhs(state,scope["$this"]);
                  scoped(scope,{
                    $this : _4
                  },function (scope) {
                          newState = setCounter_value(newState,scope["$this"],0);
                      });
                  var _1 = getAdd_rhs(state,scope["$this"]);
                  scoped(scope,{
                    $this : _1
                  },function (scope) {
                          newState = setCounter_value(newState,scope["$this"],0);
                      });
              });
      });
  return newState;
}

actions["Add_reset"] = Add_reset;
function Counter_increment(state,action) {
  var newState = state;
  scoped(scope,_.assign({
  },action.props,{
    by : action.args[0]
  }),function (scope) {
          scoped(scope,{
            $this : scope.c
          },function (scope) {
                  var _1 = scope.value !== null && scope.by !== null ? scope.value + scope.by : null;
                  newState = setCounter_value(newState,scope["$this"],_1);
              });
      });
  return newState;
}

actions["Counter_increment"] = Counter_increment;