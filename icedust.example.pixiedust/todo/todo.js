var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Lifted = require('pixiedust/components/Lifted');
var pixiedustRuntime = require('pixiedust/runtime');
var imports = {
  "../components/Select" : require("../components/Select"),
  "../components/inputs" : require("../components/inputs")
};
var expression = require('expression');
var constants = require('pixiedust-constants');
var _ = require('lodash');
var moment = require('moment');
var immutable = require('immutable');
var pixiedustRuntime = require('pixiedust/runtime');
var scope = constants.EMPTY_OBJECT;
var emptyState = immutable.Map({
  "Todo" : immutable.Map(),
  "TodoList" : immutable.Map(),
  "Todo_view" : immutable.Map(),
  "Todo_list" : immutable.Map(),
  "Todo_todoList" : immutable.Map(),
  "TodoList_view" : immutable.Map(),
  "TodoList_todos" : immutable.Map(),
  "TodoList_visibleTodos" : immutable.Map()
});
module.exports.emptyState = emptyState;
function getTodo_finished(state,id) {
  var result = state.get("Todo").get(id);
  if(result === undefined) {
    result = null;
  }
  if(result != null) {
    result = result.finished;
    if(result === undefined) {
      result = null;
    }
  }
  return result;
}

module.exports.getTodo_finished = getTodo_finished;
function getTodo_finished_Many(state,ids) {
  var result = [];
  var table = state.get("Todo");
  for (var i = 0 ; i < ids.length ; i++) {
    var value = table.get(ids[i]);
    if(value != null) {
      value = value.finished;
      if(value === undefined) {
        value = null;
      }
    }
    result.push(value);
  }
  return result;
}

module.exports.getTodo_finished_Many = getTodo_finished_Many;
function getTodo_task(state,id) {
  var result = state.get("Todo").get(id);
  if(result === undefined) {
    result = null;
  }
  if(result != null) {
    result = result.task;
    if(result === undefined) {
      result = null;
    }
  }
  return result;
}

module.exports.getTodo_task = getTodo_task;
function getTodo_task_Many(state,ids) {
  var result = [];
  var table = state.get("Todo");
  for (var i = 0 ; i < ids.length ; i++) {
    var value = table.get(ids[i]);
    if(value != null) {
      value = value.task;
      if(value === undefined) {
        value = null;
      }
    }
    result.push(value);
  }
  return result;
}

module.exports.getTodo_task_Many = getTodo_task_Many;
function getTodo_view(state,id) {
  var result = state.get("Todo_view").get(id);
  if(result === undefined) {
    result = undefined;
  }
  return result;
}

module.exports.getTodo_view = getTodo_view;
function getTodo_view_Many(state,ids) {
  var result = [];
  var table = state.get("Todo_view");
  for (var i = 0 ; i < ids.length ; i++) {
    var value = table.get(ids[i]);
    result.push(value);
  }
  return result;
}

module.exports.getTodo_view_Many = getTodo_view_Many;
function getTodo_list(state,id) {
  var result = state.get("Todo_list").get(id);
  if(result === undefined) {
    result = null;
  }
  return result;
}

module.exports.getTodo_list = getTodo_list;
function getTodo_list_Many(state,ids) {
  var result = [];
  var table = state.get("Todo_list");
  for (var i = 0 ; i < ids.length ; i++) {
    var value = table.get(ids[i]);
    result.push(value);
  }
  return result;
}

module.exports.getTodo_list_Many = getTodo_list_Many;
function getTodo_todoList(state,id) {
  var result = state.get("Todo_todoList").get(id);
  if(result === undefined) {
    result = undefined;
  }
  return result;
}

module.exports.getTodo_todoList = getTodo_todoList;
function getTodo_todoList_Many(state,ids) {
  var result = [];
  var table = state.get("Todo_todoList");
  for (var i = 0 ; i < ids.length ; i++) {
    var value = table.get(ids[i]);
    var value2 = value;
    if(value2 != null) {
      for (var j = 0 ; j < value2.length ; j++) {
        var value = value2[j];
        result.push(value);
      }
    }
  }
  return result;
}

module.exports.getTodo_todoList_Many = getTodo_todoList_Many;
function getTodoList_filter(state,id) {
  var result = state.get("TodoList").get(id);
  if(result === undefined) {
    result = null;
  }
  if(result != null) {
    result = result.filter;
    if(result === undefined) {
      result = null;
    }
  }
  return result;
}

module.exports.getTodoList_filter = getTodoList_filter;
function getTodoList_filter_Many(state,ids) {
  var result = [];
  var table = state.get("TodoList");
  for (var i = 0 ; i < ids.length ; i++) {
    var value = table.get(ids[i]);
    if(value != null) {
      value = value.filter;
      if(value === undefined) {
        value = null;
      }
    }
    result.push(value);
  }
  return result;
}

module.exports.getTodoList_filter_Many = getTodoList_filter_Many;
function getTodoList_view(state,id) {
  var result = state.get("TodoList_view").get(id);
  if(result === undefined) {
    result = undefined;
  }
  return result;
}

module.exports.getTodoList_view = getTodoList_view;
function getTodoList_view_Many(state,ids) {
  var result = [];
  var table = state.get("TodoList_view");
  for (var i = 0 ; i < ids.length ; i++) {
    var value = table.get(ids[i]);
    result.push(value);
  }
  return result;
}

module.exports.getTodoList_view_Many = getTodoList_view_Many;
function getTodoList_todos(state,id) {
  var result = state.get("TodoList_todos").get(id);
  if(result === undefined) {
    result = constants.EMPTY_ARRAY;
  }
  return result;
}

module.exports.getTodoList_todos = getTodoList_todos;
function getTodoList_todos_Many(state,ids) {
  var result = [];
  var table = state.get("TodoList_todos");
  for (var i = 0 ; i < ids.length ; i++) {
    var value = table.get(ids[i]);
    var value2 = value;
    if(value2 != null) {
      for (var j = 0 ; j < value2.length ; j++) {
        var value = value2[j];
        result.push(value);
      }
    }
  }
  return result;
}

module.exports.getTodoList_todos_Many = getTodoList_todos_Many;
function getTodoList_visibleTodos(state,id) {
  var result = state.get("TodoList_visibleTodos").get(id);
  if(result === undefined) {
    result = undefined;
  }
  return result;
}

module.exports.getTodoList_visibleTodos = getTodoList_visibleTodos;
function getTodoList_visibleTodos_Many(state,ids) {
  var result = [];
  var table = state.get("TodoList_visibleTodos");
  for (var i = 0 ; i < ids.length ; i++) {
    var value = table.get(ids[i]);
    var value2 = value;
    if(value2 != null) {
      for (var j = 0 ; j < value2.length ; j++) {
        var value = value2[j];
        result.push(value);
      }
    }
  }
  return result;
}

module.exports.getTodoList_visibleTodos_Many = getTodoList_visibleTodos_Many;
function setTodo_finished(state,id,value) {
  state = invalidateTodo_finished(state,id);
  var prop = {
    finished : value
  };
  state = state.update("Todo",function (table) {
          return table.update(id,function (e) {
                  return _.assign({
                  },e,prop);
              });
      });
  return state;
}

module.exports.setTodo_finished = setTodo_finished;
function setTodo_task(state,id,value) {
  state = invalidateTodo_task(state,id);
  var prop = {
    task : value
  };
  state = state.update("Todo",function (table) {
          return table.update(id,function (e) {
                  return _.assign({
                  },e,prop);
              });
      });
  return state;
}

module.exports.setTodo_task = setTodo_task;
function setTodo_list(state,id,value) {
  state = invalidateTodo_list(state,id);
  var previousValue = getTodo_list(state,id);
  var table = state.get("Todo_list").set(id,value);
  state = state.set("Todo_list",table);
  var inverseTable = state.get("TodoList_todos");
  if(value != null) {
    var addedId = value;
    state = invalidateTodoList_todos(state,addedId);
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
    state = invalidateTodoList_todos(state,removedId);
    var inverseIds = inverseTable.get(removedId);
    if(inverseIds === undefined) {
      inverseIds = [];
    } else {
      inverseIds = _.without(inverseIds,id);
    }
    inverseTable = inverseTable.set(removedId,inverseIds);
  }
  state = state.set("TodoList_todos",inverseTable);
  return state;
}

module.exports.setTodo_list = setTodo_list;
function setTodoList_filter(state,id,value) {
  state = invalidateTodoList_filter(state,id);
  var prop = {
    filter : value
  };
  state = state.update("TodoList",function (table) {
          return table.update(id,function (e) {
                  return _.assign({
                  },e,prop);
              });
      });
  return state;
}

module.exports.setTodoList_filter = setTodoList_filter;
function setTodoList_todos(state,id,value) {
  state = invalidateTodoList_todos(state,id);
  var previousValue = getTodoList_todos(state,id);
  var table = state.get("TodoList_todos").set(id,value);
  state = state.set("TodoList_todos",table);
  var inverseTable = state.get("Todo_list");
  var added = _.difference(value,previousValue);
  var removed = _.difference(previousValue,value);
  for (var i = 0 ; i < added.length ; i++) {
    var addedId = added[i];
    state = invalidateTodo_list(state,addedId);
    inverseTable = inverseTable.set(addedId,id);
  }
  for (var i = 0 ; i < removed.length ; i++) {
    var removedId = removed[i];
    state = invalidateTodo_list(state,removedId);
    inverseTable = inverseTable.remove(removedId);
  }
  state = state.set("Todo_list",inverseTable);
  return state;
}

module.exports.setTodoList_todos = setTodoList_todos;
function addTodoList_todos(state,id,value) {
  var previousValue = getTodoList_todos(state,id);
  var nextValue = previousValue.concat(value);
  return setTodoList_todos(state,id,nextValue);
}

module.exports.addTodoList_todos = addTodoList_todos;
function invalidateTodo_finished(state,id) {
   ( function () {
          var _0 = id;
          var _1 = getTodo_list(state,_0);
          if(_1 != null) {
            state = invalidateTodoList_visibleTodos(state,_1);
          }
      } ) ();
  return state;
}

module.exports.invalidateTodo_finished = invalidateTodo_finished;
function invalidateTodo_task(state,id) {
  return state;
}

module.exports.invalidateTodo_task = invalidateTodo_task;
function invalidateTodo_view(state,id) {
  state = state.update("Todo_view",function (set) {
          return set.remove(id);
      });
  return state;
}

module.exports.invalidateTodo_view = invalidateTodo_view;
function invalidateTodo_list(state,id) {
  return state;
}

module.exports.invalidateTodo_list = invalidateTodo_list;
function invalidateTodo_todoList(state,id) {
  state = state.update("Todo_todoList",function (set) {
          return set.remove(id);
      });
  return state;
}

module.exports.invalidateTodo_todoList = invalidateTodo_todoList;
function invalidateTodoList_filter(state,id) {
  if(id != null) {
    state = invalidateTodoList_visibleTodos(state,id);
  }
  return state;
}

module.exports.invalidateTodoList_filter = invalidateTodoList_filter;
function invalidateTodoList_view(state,id) {
  state = state.update("TodoList_view",function (set) {
          return set.remove(id);
      });
  return state;
}

module.exports.invalidateTodoList_view = invalidateTodoList_view;
function invalidateTodoList_todos(state,id) {
  if(id != null) {
    state = invalidateTodoList_visibleTodos(state,id);
  }
  return state;
}

module.exports.invalidateTodoList_todos = invalidateTodoList_todos;
function invalidateTodoList_visibleTodos(state,id) {
  state = state.update("TodoList_visibleTodos",function (set) {
          return set.remove(id);
      });
  if(id != null) {
    state = invalidateTodoList_view(state,id);
  }
  return state;
}

module.exports.invalidateTodoList_visibleTodos = invalidateTodoList_visibleTodos;
function calculateTodo_view(state,id) {
  var result = getTodo_view(state,id);
  if(result === undefined) {
    var _0 = id;
    var _1 = React.createElement(Component.Todo,{
      todo : _0
    });
    result = _1;
    state = state.update("Todo_view",function (table) {
            return table.set(id,_1);
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateTodo_view = calculateTodo_view;
function calculateTodo_view_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateTodo_view(state,id);
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

module.exports.calculateTodo_view_Many = calculateTodo_view_Many;
function calculateTodoList_filter(state,id) {
  var result = getTodoList_filter(state,id);
  if(result === null) {
    var _0 = id;
    result = "ALL";
    var prop = {
      filter : "ALL"
    };
    state = state.update("TodoList",function (table) {
            return table.update(id,function (e) {
                    return _.assign({
                    },e,prop);
                });
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateTodoList_filter = calculateTodoList_filter;
function calculateTodoList_filter_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateTodoList_filter(state,id);
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

module.exports.calculateTodoList_filter_Many = calculateTodoList_filter_Many;
function calculateTodoList_view(state,id) {
  var result = getTodoList_view(state,id);
  if(result === undefined) {
    var _0 = id;
    var _3 ;
    if(_0 != null) {
      var calc = calculateTodoList_visibleTodos(state,_0);
      state = calc.state;
      _3 = calc.result;
    } else {
      _3 = constants.EMPTY_ARRAY;
    }
    var oldScope = scope;
    var _5 = [];
    for (var _6 = 0 ; _6 < _3.length ; _6++) {
       ( function () {
              var scope = _.assign({
              },oldScope,{
                todo : _3[_6]
              });
              var _4 ;
              if(scope.todo != null) {
                var calc = calculateTodo_view(state,scope.todo);
                state = calc.state;
                _4 = calc.result;
              } else {
                _4 = null;
              }
              _5.push(_.assign({
              },_4,{
                key : scope.todo
              }));
          } ) ();
    }
    var _1 = React.createElement("div",{
    },_5);
    result = _1;
    state = state.update("TodoList_view",function (table) {
            return table.set(id,_1);
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateTodoList_view = calculateTodoList_view;
function calculateTodoList_view_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateTodoList_view(state,id);
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

module.exports.calculateTodoList_view_Many = calculateTodoList_view_Many;
function calculateTodoList_visibleTodos(state,id) {
  var result = getTodoList_visibleTodos(state,id);
  if(result === undefined) {
    var _0 = id;
    var _22 ;
    var _1 ;
    if(_0 != null) {
      var calc = calculateTodoList_filter(state,_0);
      state = calc.state;
      _1 = calc.result;
    } else {
      _1 = null;
    }
    var _2 = _1 !== null ? _1 === "ALL" : null;
    if(_2) {
      var _3 = getTodoList_todos(state,_0);
      _22 = _3;
    } else {
      var _21 ;
      var _4 ;
      if(_0 != null) {
        var calc = calculateTodoList_filter(state,_0);
        state = calc.state;
        _4 = calc.result;
      } else {
        _4 = null;
      }
      var _5 = _4 !== null ? _4 === "NOT_FINISHED" : null;
      if(_5) {
        var _6 = getTodoList_todos(state,_0);
        var _7 = constants.EMPTY_ARRAY;
        for (var _8 = 0 ; _8 < _6.length ; _8++) {
          var oldScope = scope;
           ( function () {
                  var scope = _.assign({
                  },oldScope,{
                    todo : _6[_8]
                  });
                  var _9 = getTodo_finished(state,scope.todo);
                  var _10 = !_9;
                  if(_10) {
                    _7 = _7.concat([scope.todo]);
                  }
              } ) ();
        }
        _21 = _7;
      } else {
        var _20 ;
        var _12 ;
        if(_0 != null) {
          var calc = calculateTodoList_filter(state,_0);
          state = calc.state;
          _12 = calc.result;
        } else {
          _12 = null;
        }
        var _13 = _12 !== null ? _12 === "FINISHED" : null;
        if(_13) {
          var _14 = getTodoList_todos(state,_0);
          var _15 = constants.EMPTY_ARRAY;
          for (var _16 = 0 ; _16 < _14.length ; _16++) {
            var oldScope = scope;
             ( function () {
                    var scope = _.assign({
                    },oldScope,{
                      todo : _14[_16]
                    });
                    var _17 = getTodo_finished(state,scope.todo);
                    if(_17) {
                      _15 = _15.concat([scope.todo]);
                    }
                } ) ();
          }
          _20 = _15;
        } else {
          var _19 = getTodoList_todos(state,_0);
          _20 = _19;
        }
        _21 = _20;
      }
      _22 = _21;
    }
    result = _22;
    var previousValue = getTodoList_visibleTodos(state,id);
    var table = state.get("TodoList_visibleTodos").set(id,_22);
    state = state.set("TodoList_visibleTodos",table);
    var inverseTable = state.get("Todo_todoList");
    var added = _.difference(_22,previousValue);
    var removed = _.difference(previousValue,_22);
    for (var i = 0 ; i < added.length ; i++) {
      var addedId = added[i];
      var inverseIds = inverseTable.get(addedId);
      if(inverseIds === undefined) {
        inverseIds = [id];
      } else {
        inverseIds = inverseIds.concat(id);
      }
      inverseTable = inverseTable.set(addedId,inverseIds);
    }
    for (var i = 0 ; i < removed.length ; i++) {
      var removedId = removed[i];
      var inverseIds = inverseTable.get(removedId);
      if(inverseIds === undefined) {
        inverseIds = [];
      } else {
        inverseIds = _.without(inverseIds,id);
      }
      inverseTable = inverseTable.set(removedId,inverseIds);
    }
    state = state.set("Todo_todoList",inverseTable);
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateTodoList_visibleTodos = calculateTodoList_visibleTodos;
function calculateTodoList_visibleTodos_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateTodoList_visibleTodos(state,id);
    state = calc.state;
    if(calc.result !== null) {
      result = result.concat(calc.result);
    }
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateTodoList_visibleTodos_Many = calculateTodoList_visibleTodos_Many;
function init(state) {
  var l1 = {
    id : "l1"
  };
  state = state.update("TodoList",function (table) {
          return table.set(l1.id,l1);
      });
  var t1 = {
    id : "t1"
  };
  state = state.update("Todo",function (table) {
          return table.set(t1.id,t1);
      });
  var t2 = {
    id : "t2"
  };
  state = state.update("Todo",function (table) {
          return table.set(t2.id,t2);
      });
  var t3 = {
    id : "t3"
  };
  state = state.update("Todo",function (table) {
          return table.set(t3.id,t3);
      });
  state = addTodoList_todos(state,l1.id,t1.id);
  state = addTodoList_todos(state,l1.id,t2.id);
  state = addTodoList_todos(state,l1.id,t3.id);
  state = setTodo_finished(state,t1.id,true);
  state = setTodo_task(state,t1.id,"Write js backend");
  state = setTodo_finished(state,t2.id,true);
  state = setTodo_task(state,t2.id,"Setup nashorn");
  state = setTodo_finished(state,t3.id,false);
  state = setTodo_task(state,t3.id,"Finish thesis");
  return {
    state : state,
    ids : {
      l1 : l1.id,
      t1 : t1.id,
      t2 : t2.id,
      t3 : t3.id
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
                    var _0 = React.createElement(Component.TodoList,{
                      list : scope.l1
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
                    expression : "@TodoList(l1) {\n}",
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
  "setTodo_finished" : function (state,action) {
          return setTodo_finished(state,action.id,action.value);
      },
  "setTodo_task" : function (state,action) {
          return setTodo_task(state,action.id,action.value);
      },
  "setTodo_list" : function (state,action) {
          return setTodo_list(state,action.id,action.value);
      },
  "addTodo_todoList" : function (state,action) {
          return addTodo_todoList(state,action.id,action.value);
      },
  "setTodoList_filter" : function (state,action) {
          return setTodoList_filter(state,action.id,action.value);
      },
  "setTodoList_todos" : function (state,action) {
          return setTodoList_todos(state,action.id,action.value);
      },
  "addTodoList_todos" : function (state,action) {
          return addTodoList_todos(state,action.id,action.value);
      },
  "addTodoList_visibleTodos" : function (state,action) {
          return addTodoList_visibleTodos(state,action.id,action.value);
      },
  "calculateTodo_view" : function (state,action) {
          return calculateTodo_view(state,action.id).state;
      },
  "calculateTodo_view_Many" : function (state,action) {
          return calculateTodo_view_Many(state,action.ids).state;
      },
  "calculateTodoList_filter" : function (state,action) {
          return calculateTodoList_filter(state,action.id).state;
      },
  "calculateTodoList_filter_Many" : function (state,action) {
          return calculateTodoList_filter_Many(state,action.ids).state;
      },
  "calculateTodoList_view" : function (state,action) {
          return calculateTodoList_view(state,action.id).state;
      },
  "calculateTodoList_view_Many" : function (state,action) {
          return calculateTodoList_view_Many(state,action.ids).state;
      },
  "calculateTodoList_visibleTodos" : function (state,action) {
          return calculateTodoList_visibleTodos(state,action.id).state;
      },
  "calculateTodoList_visibleTodos_Many" : function (state,action) {
          return calculateTodoList_visibleTodos_Many(state,action.ids).state;
      },
  "createTodo" : function (state,action) {
          var entity = action.entity;
          var instance = {
            "id" : entity.id,
            "finished" : entity.finished === undefined ? null : entity.finished,
            "task" : entity.task === undefined ? null : entity.task
          };
          state = state.update("Todo",function (table) {
                  return table.set(instance.id,instance);
              });
          if(entity.list !== undefined) {
            state = setTodo_list(state,instance.id,entity.list);
          }
          if(entity.todoList !== undefined) {
            state = setTodo_todoList(state,instance.id,entity.todoList);
          }
          return state;
      },
  "createTodoList" : function (state,action) {
          var entity = action.entity;
          var instance = {
            "id" : entity.id,
            "filter" : entity.filter === undefined ? null : entity.filter
          };
          state = state.update("TodoList",function (table) {
                  return table.set(instance.id,instance);
              });
          if(entity.todos !== undefined) {
            state = setTodoList_todos(state,instance.id,entity.todos);
          }
          if(entity.visibleTodos !== undefined) {
            state = setTodoList_visibleTodos(state,instance.id,entity.visibleTodos);
          }
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
  "setTodo_finished" : function (id,value) {
          return {
            type : "setTodo_finished",
            id : id,
            value : value
          };
      },
  "setTodo_task" : function (id,value) {
          return {
            type : "setTodo_task",
            id : id,
            value : value
          };
      },
  "setTodo_list" : function (id,value) {
          return {
            type : "setTodo_list",
            id : id,
            value : value
          };
      },
  "addTodo_todoList" : function (id,value) {
          return {
            type : "addTodo_todoList",
            id : id,
            value : value
          };
      },
  "setTodoList_filter" : function (id,value) {
          return {
            type : "setTodoList_filter",
            id : id,
            value : value
          };
      },
  "setTodoList_todos" : function (id,value) {
          return {
            type : "setTodoList_todos",
            id : id,
            value : value
          };
      },
  "addTodoList_todos" : function (id,value) {
          return {
            type : "addTodoList_todos",
            id : id,
            value : value
          };
      },
  "addTodoList_visibleTodos" : function (id,value) {
          return {
            type : "addTodoList_visibleTodos",
            id : id,
            value : value
          };
      },
  "calculateTodo_view" : function (id) {
          return {
            type : "calculateTodo_view",
            id : id
          };
      },
  "calculateTodo_view_Many" : function (ids) {
          return {
            type : "calculateTodo_view_Many",
            id : ids
          };
      },
  "calculateTodoList_filter" : function (id) {
          return {
            type : "calculateTodoList_filter",
            id : id
          };
      },
  "calculateTodoList_filter_Many" : function (ids) {
          return {
            type : "calculateTodoList_filter_Many",
            id : ids
          };
      },
  "calculateTodoList_view" : function (id) {
          return {
            type : "calculateTodoList_view",
            id : id
          };
      },
  "calculateTodoList_view_Many" : function (ids) {
          return {
            type : "calculateTodoList_view_Many",
            id : ids
          };
      },
  "calculateTodoList_visibleTodos" : function (id) {
          return {
            type : "calculateTodoList_visibleTodos",
            id : id
          };
      },
  "calculateTodoList_visibleTodos_Many" : function (ids) {
          return {
            type : "calculateTodoList_visibleTodos_Many",
            id : ids
          };
      },
  "createTodo" : function (entity) {
          return {
            type : "createTodo",
            entity : entity
          };
      },
  "createTodoList" : function (entity) {
          return {
            type : "createTodoList",
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
          Todo : Lifted(function Todo(props,state) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _5 = getTodo_finished(state,scope.todo);
                  var _4 = React.createElement(imports["../components/inputs"].BooleanInput,{
                    value$identity :  ( function () {
                            return scope.todo;
                        } ) (),
                    value$setter : actionCreators["setTodo_finished"],
                    value : _5
                  });
                  var _8 = getTodo_task(state,scope.todo);
                  var _6 = React.createElement("span",{
                  },_8);
                  var _9 = React.createElement("button",{
                  },"X");
                  var _2 = React.createElement("label",{
                  },_4,_6,_9);
                  var _0 = React.createElement("div",{
                  },_2);
                  return {
                    result : _0,
                    state : state
                  };
              }),
          TodoList : Lifted(function TodoList(props,state) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _0 = React.createElement("input",{
                    type : "text",
                    placeholder : "Todo..."
                  });
                  var _3 =  ( "ALL" == null ? constants.EMPTY_ARRAY : ["ALL"] ) .concat("FINISHED" == null ? constants.EMPTY_ARRAY : ["FINISHED"]);
                  var _4 = _3.concat("NOT_FINISHED" == null ? constants.EMPTY_ARRAY : ["NOT_FINISHED"]);
                  var _5 =  ( "All" == null ? constants.EMPTY_ARRAY : ["All"] ) .concat("Finished todos" == null ? constants.EMPTY_ARRAY : ["Finished todos"]);
                  var _6 = _5.concat("Unfinished todos" == null ? constants.EMPTY_ARRAY : ["Unfinished todos"]);
                  var _7 ;
                  if(scope.list != null) {
                    var calc = calculateTodoList_filter(state,scope.list);
                    state = calc.state;
                    _7 = calc.result;
                  } else {
                    _7 = null;
                  }
                  var _2 = React.createElement(imports["../components/Select"].Select,{
                    choice : _4,
                    labels : _6,
                    selection$identity :  ( function () {
                            return scope.list;
                        } ) (),
                    selection$setter : actionCreators["setTodoList_filter"],
                    selection : _7
                  });
                  var _8 = React.createElement("a",{
                  },"Clear finished todos");
                  var _10 ;
                  if(scope.list != null) {
                    var calc = calculateTodoList_view(state,scope.list);
                    state = calc.state;
                    _10 = calc.result;
                  } else {
                    _10 = null;
                  }
                  return {
                    result : React.createElement('group',{
                    },_0,_2,_8,_10),
                    state : state
                  };
              })
        };
    } ) ();
module.exports.Component = Component;