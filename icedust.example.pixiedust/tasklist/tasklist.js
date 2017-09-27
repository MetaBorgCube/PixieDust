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
  "Task" : immutable.Map(),
  "TaskApp" : immutable.Map(),
  "TaskList" : immutable.Map(),
  "Task_beingEdited" : immutable.Map(),
  "Task_finished" : immutable.Map(),
  "Task_inverseAllTasks" : immutable.Map(),
  "Task_inverseFinishedTasks" : immutable.Map(),
  "Task_inverseVisibleTasks" : immutable.Map(),
  "Task_list" : immutable.Map(),
  "Task_taskApp" : immutable.Map(),
  "TaskApp_filter" : immutable.Map(),
  "TaskApp_input" : immutable.Map(),
  "TaskApp_remainder" : immutable.Map(),
  "TaskApp_editing" : immutable.Map(),
  "TaskApp_lists" : immutable.Map(),
  "TaskApp_rootList" : immutable.Map(),
  "TaskList_allFinished" : immutable.Map(),
  "TaskList_finished" : immutable.Map(),
  "TaskList_rootDistance" : immutable.Map(),
  "TaskList_allTasks" : immutable.Map(),
  "TaskList_app" : immutable.Map(),
  "TaskList_app2" : immutable.Map(),
  "TaskList_children" : immutable.Map(),
  "TaskList_finishedTasks" : immutable.Map(),
  "TaskList_parent" : immutable.Map(),
  "TaskList_rootList" : immutable.Map(),
  "TaskList_rootListInverse" : immutable.Map(),
  "TaskList_tasks" : immutable.Map(),
  "TaskList_visibleTasks" : immutable.Map()
});
module.exports.emptyState = emptyState;
function getTask_beingEdited(state,id) {
  return state.get("Task_beingEdited").get(id);
}

module.exports.getTask_beingEdited = getTask_beingEdited;
function getTask_beingEdited_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Task_beingEdited");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _2.get(ids[_3]);
    if(_4 !== undefined) {
      _0.push(_4);
    }
  }
  return _0;
}

module.exports.getTask_beingEdited_Many = getTask_beingEdited_Many;
function getTask_description(state,id) {
  var _0 = state.get("Task").get(id);
  if(_0 !== undefined) {
    _0 = _0.description;
    if(_0 === undefined) {
      _0 = null;
    }
  }
  return _0;
}

module.exports.getTask_description = getTask_description;
function getTask_description_Many(state,ids) {
  var _0 = [];
  var _1 = state.get("Task");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _1.get(ids[_3]);
    if(_4 !== undefined) {
      _4 = _4.description;
      if(_4 !== undefined && _4 !== null) {
        if(_4 !== undefined) {
          _0.push(_4);
        }
      }
    }
  }
  return _0;
}

module.exports.getTask_description_Many = getTask_description_Many;
function getTask_finished(state,id) {
  var _0 = state.get("Task").get(id);
  if(_0 !== undefined) {
    _0 = _0.finished;
    if(_0 === undefined || _0 === null) {
      _0 = state.get("Task_finished").get(id);
    }
  }
  return _0;
}

module.exports.getTask_finished = getTask_finished;
function getTask_finished_Many(state,ids) {
  var _0 = [];
  var _1 = state.get("Task");
  var _2 = state.get("Task_finished");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _1.get(ids[_3]);
    if(_4 !== undefined) {
      _4 = _4.finished;
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

module.exports.getTask_finished_Many = getTask_finished_Many;
function getTask_inverseAllTasks(state,id) {
  return state.get("Task_inverseAllTasks").get(id);
}

module.exports.getTask_inverseAllTasks = getTask_inverseAllTasks;
function getTask_inverseAllTasks_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Task_inverseAllTasks");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _2.get(ids[_3]);
    for (var _6 = 0 ; _6 < _4.length ; _6++) {
      var _5 = _4[_6];
      if(_5 !== null) {
        _0.push(_5);
      }
    }
  }
  return _0;
}

module.exports.getTask_inverseAllTasks_Many = getTask_inverseAllTasks_Many;
function getTask_inverseFinishedTasks(state,id) {
  return state.get("Task_inverseFinishedTasks").get(id);
}

module.exports.getTask_inverseFinishedTasks = getTask_inverseFinishedTasks;
function getTask_inverseFinishedTasks_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Task_inverseFinishedTasks");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _2.get(ids[_3]);
    for (var _6 = 0 ; _6 < _4.length ; _6++) {
      var _5 = _4[_6];
      if(_5 !== null) {
        _0.push(_5);
      }
    }
  }
  return _0;
}

module.exports.getTask_inverseFinishedTasks_Many = getTask_inverseFinishedTasks_Many;
function getTask_inverseVisibleTasks(state,id) {
  return state.get("Task_inverseVisibleTasks").get(id);
}

module.exports.getTask_inverseVisibleTasks = getTask_inverseVisibleTasks;
function getTask_inverseVisibleTasks_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Task_inverseVisibleTasks");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _2.get(ids[_3]);
    for (var _6 = 0 ; _6 < _4.length ; _6++) {
      var _5 = _4[_6];
      if(_5 !== null) {
        _0.push(_5);
      }
    }
  }
  return _0;
}

module.exports.getTask_inverseVisibleTasks_Many = getTask_inverseVisibleTasks_Many;
function getTask_list(state,id) {
  var _0 = state.get("Task_list").get(id);
  if(_0 === undefined) {
    _0 = null;
  }
  return _0;
}

module.exports.getTask_list = getTask_list;
function getTask_list_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Task_list");
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

module.exports.getTask_list_Many = getTask_list_Many;
function getTask_taskApp(state,id) {
  var _0 = state.get("Task_taskApp").get(id);
  if(_0 === undefined) {
    _0 = null;
  }
  return _0;
}

module.exports.getTask_taskApp = getTask_taskApp;
function getTask_taskApp_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Task_taskApp");
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

module.exports.getTask_taskApp_Many = getTask_taskApp_Many;
function getTaskApp_filter(state,id) {
  var _0 = state.get("TaskApp").get(id);
  if(_0 !== undefined) {
    _0 = _0.filter;
    if(_0 === undefined || _0 === null) {
      _0 = state.get("TaskApp_filter").get(id);
    }
  }
  return _0;
}

module.exports.getTaskApp_filter = getTaskApp_filter;
function getTaskApp_filter_Many(state,ids) {
  var _0 = [];
  var _1 = state.get("TaskApp");
  var _2 = state.get("TaskApp_filter");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _1.get(ids[_3]);
    if(_4 !== undefined) {
      _4 = _4.filter;
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

module.exports.getTaskApp_filter_Many = getTaskApp_filter_Many;
function getTaskApp_input(state,id) {
  var _0 = state.get("TaskApp").get(id);
  if(_0 !== undefined) {
    _0 = _0.input;
    if(_0 === undefined || _0 === null) {
      _0 = state.get("TaskApp_input").get(id);
    }
  }
  return _0;
}

module.exports.getTaskApp_input = getTaskApp_input;
function getTaskApp_input_Many(state,ids) {
  var _0 = [];
  var _1 = state.get("TaskApp");
  var _2 = state.get("TaskApp_input");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _1.get(ids[_3]);
    if(_4 !== undefined) {
      _4 = _4.input;
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

module.exports.getTaskApp_input_Many = getTaskApp_input_Many;
function getTaskApp_remainder(state,id) {
  return state.get("TaskApp_remainder").get(id);
}

module.exports.getTaskApp_remainder = getTaskApp_remainder;
function getTaskApp_remainder_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("TaskApp_remainder");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _2.get(ids[_3]);
    if(_4 !== undefined) {
      _0.push(_4);
    }
  }
  return _0;
}

module.exports.getTaskApp_remainder_Many = getTaskApp_remainder_Many;
function getTaskApp_editing(state,id) {
  var _0 = state.get("TaskApp_editing").get(id);
  if(_0 === undefined) {
    _0 = null;
  }
  return _0;
}

module.exports.getTaskApp_editing = getTaskApp_editing;
function getTaskApp_editing_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("TaskApp_editing");
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

module.exports.getTaskApp_editing_Many = getTaskApp_editing_Many;
function getTaskApp_lists(state,id) {
  var _0 = state.get("TaskApp_lists").get(id);
  if(_0 === undefined) {
    _0 = constants.EMPTY_ARRAY;
  }
  return _0;
}

module.exports.getTaskApp_lists = getTaskApp_lists;
function getTaskApp_lists_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("TaskApp_lists");
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

module.exports.getTaskApp_lists_Many = getTaskApp_lists_Many;
function getTaskApp_rootList(state,id) {
  var _0 = state.get("TaskApp_rootList").get(id);
  if(_0 === undefined) {
    _0 = null;
  }
  return _0;
}

module.exports.getTaskApp_rootList = getTaskApp_rootList;
function getTaskApp_rootList_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("TaskApp_rootList");
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

module.exports.getTaskApp_rootList_Many = getTaskApp_rootList_Many;
function getTaskList_allFinished(state,id) {
  return state.get("TaskList_allFinished").get(id);
}

module.exports.getTaskList_allFinished = getTaskList_allFinished;
function getTaskList_allFinished_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("TaskList_allFinished");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _2.get(ids[_3]);
    if(_4 !== undefined) {
      _0.push(_4);
    }
  }
  return _0;
}

module.exports.getTaskList_allFinished_Many = getTaskList_allFinished_Many;
function getTaskList_finished(state,id) {
  return state.get("TaskList_finished").get(id);
}

module.exports.getTaskList_finished = getTaskList_finished;
function getTaskList_finished_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("TaskList_finished");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _2.get(ids[_3]);
    if(_4 !== undefined) {
      _0.push(_4);
    }
  }
  return _0;
}

module.exports.getTaskList_finished_Many = getTaskList_finished_Many;
function getTaskList_rootDistance(state,id) {
  return state.get("TaskList_rootDistance").get(id);
}

module.exports.getTaskList_rootDistance = getTaskList_rootDistance;
function getTaskList_rootDistance_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("TaskList_rootDistance");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _2.get(ids[_3]);
    if(_4 !== undefined) {
      _0.push(_4);
    }
  }
  return _0;
}

module.exports.getTaskList_rootDistance_Many = getTaskList_rootDistance_Many;
function getTaskList_allTasks(state,id) {
  return state.get("TaskList_allTasks").get(id);
}

module.exports.getTaskList_allTasks = getTaskList_allTasks;
function getTaskList_allTasks_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("TaskList_allTasks");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _2.get(ids[_3]);
    for (var _6 = 0 ; _6 < _4.length ; _6++) {
      var _5 = _4[_6];
      if(_5 !== null) {
        _0.push(_5);
      }
    }
  }
  return _0;
}

module.exports.getTaskList_allTasks_Many = getTaskList_allTasks_Many;
function getTaskList_app(state,id) {
  var _0 = state.get("TaskList_app").get(id);
  if(_0 === undefined) {
    _0 = null;
  }
  return _0;
}

module.exports.getTaskList_app = getTaskList_app;
function getTaskList_app_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("TaskList_app");
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

module.exports.getTaskList_app_Many = getTaskList_app_Many;
function getTaskList_app2(state,id) {
  var _0 = state.get("TaskList_app2").get(id);
  if(_0 === undefined) {
    _0 = null;
  }
  return _0;
}

module.exports.getTaskList_app2 = getTaskList_app2;
function getTaskList_app2_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("TaskList_app2");
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

module.exports.getTaskList_app2_Many = getTaskList_app2_Many;
function getTaskList_children(state,id) {
  var _0 = state.get("TaskList_children").get(id);
  if(_0 === undefined) {
    _0 = constants.EMPTY_ARRAY;
  }
  return _0;
}

module.exports.getTaskList_children = getTaskList_children;
function getTaskList_children_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("TaskList_children");
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

module.exports.getTaskList_children_Many = getTaskList_children_Many;
function getTaskList_finishedTasks(state,id) {
  return state.get("TaskList_finishedTasks").get(id);
}

module.exports.getTaskList_finishedTasks = getTaskList_finishedTasks;
function getTaskList_finishedTasks_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("TaskList_finishedTasks");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _2.get(ids[_3]);
    for (var _6 = 0 ; _6 < _4.length ; _6++) {
      var _5 = _4[_6];
      if(_5 !== null) {
        _0.push(_5);
      }
    }
  }
  return _0;
}

module.exports.getTaskList_finishedTasks_Many = getTaskList_finishedTasks_Many;
function getTaskList_parent(state,id) {
  var _0 = state.get("TaskList_parent").get(id);
  if(_0 === undefined) {
    _0 = null;
  }
  return _0;
}

module.exports.getTaskList_parent = getTaskList_parent;
function getTaskList_parent_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("TaskList_parent");
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

module.exports.getTaskList_parent_Many = getTaskList_parent_Many;
function getTaskList_rootList(state,id) {
  return state.get("TaskList_rootList").get(id);
}

module.exports.getTaskList_rootList = getTaskList_rootList;
function getTaskList_rootList_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("TaskList_rootList");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _2.get(ids[_3]);
    if(_4 !== undefined) {
      _0.push(_4);
    }
  }
  return _0;
}

module.exports.getTaskList_rootList_Many = getTaskList_rootList_Many;
function getTaskList_rootListInverse(state,id) {
  return state.get("TaskList_rootListInverse").get(id);
}

module.exports.getTaskList_rootListInverse = getTaskList_rootListInverse;
function getTaskList_rootListInverse_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("TaskList_rootListInverse");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _2.get(ids[_3]);
    for (var _6 = 0 ; _6 < _4.length ; _6++) {
      var _5 = _4[_6];
      if(_5 !== null) {
        _0.push(_5);
      }
    }
  }
  return _0;
}

module.exports.getTaskList_rootListInverse_Many = getTaskList_rootListInverse_Many;
function getTaskList_tasks(state,id) {
  var _0 = state.get("TaskList_tasks").get(id);
  if(_0 === undefined) {
    _0 = constants.EMPTY_ARRAY;
  }
  return _0;
}

module.exports.getTaskList_tasks = getTaskList_tasks;
function getTaskList_tasks_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("TaskList_tasks");
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

module.exports.getTaskList_tasks_Many = getTaskList_tasks_Many;
function getTaskList_visibleTasks(state,id) {
  return state.get("TaskList_visibleTasks").get(id);
}

module.exports.getTaskList_visibleTasks = getTaskList_visibleTasks;
function getTaskList_visibleTasks_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("TaskList_visibleTasks");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _2.get(ids[_3]);
    for (var _6 = 0 ; _6 < _4.length ; _6++) {
      var _5 = _4[_6];
      if(_5 !== null) {
        _0.push(_5);
      }
    }
  }
  return _0;
}

module.exports.getTaskList_visibleTasks_Many = getTaskList_visibleTasks_Many;
function setTask_description(state,id,value) {
  state = invalidateTask_description(state,id);
  var prop = {
    description : value
  };
  state = state.update("Task",function (table) {
          return table.update(id,function (e) {
                  return _.assign({
                  },e,prop);
              });
      });
  return state;
}

module.exports.setTask_description = setTask_description;
function setTask_finished(state,id,value) {
  state = invalidateTask_finished(state,id);
  var prop = {
    finished : value
  };
  state = state.update("Task",function (table) {
          return table.update(id,function (e) {
                  return _.assign({
                  },e,prop);
              });
      });
  return state;
}

module.exports.setTask_finished = setTask_finished;
function setTask_list(state,id,value) {
  state = invalidateTask_list(state,id);
  var previousValue = getTask_list(state,id);
  var table = state.get("Task_list").set(id,value);
  state = state.set("Task_list",table);
  var inverseTable = state.get("TaskList_tasks");
  if(value != null) {
    var addedId = value;
    state = invalidateTaskList_tasks(state,addedId);
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
    state = invalidateTaskList_tasks(state,removedId);
    var inverseIds = inverseTable.get(removedId);
    if(inverseIds === undefined) {
      inverseIds = [];
    } else {
      inverseIds = _.without(inverseIds,id);
    }
    inverseTable = inverseTable.set(removedId,inverseIds);
  }
  state = state.set("TaskList_tasks",inverseTable);
  return state;
}

module.exports.setTask_list = setTask_list;
function setTask_taskApp(state,id,value) {
  state = invalidateTask_taskApp(state,id);
  var previousValue = getTask_taskApp(state,id);
  var table = state.get("Task_taskApp").set(id,value);
  state = state.set("Task_taskApp",table);
  var inverseTable = state.get("TaskApp_editing");
  if(value != null) {
    var addedId = value;
    state = invalidateTaskApp_editing(state,addedId);
    inverseTable = inverseTable.set(addedId,id);
  }
  if(previousValue != null) {
    var removedId = previousValue;
    state = invalidateTaskApp_editing(state,removedId);
    inverseTable = inverseTable.remove(removedId);
  }
  state = state.set("TaskApp_editing",inverseTable);
  return state;
}

module.exports.setTask_taskApp = setTask_taskApp;
function setTaskApp_filter(state,id,value) {
  state = invalidateTaskApp_filter(state,id);
  var prop = {
    filter : value
  };
  state = state.update("TaskApp",function (table) {
          return table.update(id,function (e) {
                  return _.assign({
                  },e,prop);
              });
      });
  return state;
}

module.exports.setTaskApp_filter = setTaskApp_filter;
function setTaskApp_input(state,id,value) {
  state = invalidateTaskApp_input(state,id);
  var prop = {
    input : value
  };
  state = state.update("TaskApp",function (table) {
          return table.update(id,function (e) {
                  return _.assign({
                  },e,prop);
              });
      });
  return state;
}

module.exports.setTaskApp_input = setTaskApp_input;
function setTaskApp_editing(state,id,value) {
  state = invalidateTaskApp_editing(state,id);
  var previousValue = getTaskApp_editing(state,id);
  var table = state.get("TaskApp_editing").set(id,value);
  state = state.set("TaskApp_editing",table);
  var inverseTable = state.get("Task_taskApp");
  if(value != null) {
    var addedId = value;
    state = invalidateTask_taskApp(state,addedId);
    inverseTable = inverseTable.set(addedId,id);
  }
  if(previousValue != null) {
    var removedId = previousValue;
    state = invalidateTask_taskApp(state,removedId);
    inverseTable = inverseTable.remove(removedId);
  }
  state = state.set("Task_taskApp",inverseTable);
  return state;
}

module.exports.setTaskApp_editing = setTaskApp_editing;
function setTaskApp_lists(state,id,value) {
  state = invalidateTaskApp_lists(state,id);
  var previousValue = getTaskApp_lists(state,id);
  var table = state.get("TaskApp_lists").set(id,value);
  state = state.set("TaskApp_lists",table);
  var inverseTable = state.get("TaskList_app");
  var added = _.difference(value,previousValue);
  var removed = _.difference(previousValue,value);
  for (var i = 0 ; i < added.length ; i++) {
    var addedId = added[i];
    state = invalidateTaskList_app(state,addedId);
    inverseTable = inverseTable.set(addedId,id);
  }
  for (var i = 0 ; i < removed.length ; i++) {
    var removedId = removed[i];
    state = invalidateTaskList_app(state,removedId);
    inverseTable = inverseTable.remove(removedId);
  }
  state = state.set("TaskList_app",inverseTable);
  return state;
}

module.exports.setTaskApp_lists = setTaskApp_lists;
function setTaskApp_rootList(state,id,value) {
  state = invalidateTaskApp_rootList(state,id);
  var previousValue = getTaskApp_rootList(state,id);
  var table = state.get("TaskApp_rootList").set(id,value);
  state = state.set("TaskApp_rootList",table);
  var inverseTable = state.get("TaskList_app2");
  if(value != null) {
    var addedId = value;
    state = invalidateTaskList_app2(state,addedId);
    inverseTable = inverseTable.set(addedId,id);
  }
  if(previousValue != null) {
    var removedId = previousValue;
    state = invalidateTaskList_app2(state,removedId);
    inverseTable = inverseTable.remove(removedId);
  }
  state = state.set("TaskList_app2",inverseTable);
  return state;
}

module.exports.setTaskApp_rootList = setTaskApp_rootList;
function setTaskList_app(state,id,value) {
  state = invalidateTaskList_app(state,id);
  var previousValue = getTaskList_app(state,id);
  var table = state.get("TaskList_app").set(id,value);
  state = state.set("TaskList_app",table);
  var inverseTable = state.get("TaskApp_lists");
  if(value != null) {
    var addedId = value;
    state = invalidateTaskApp_lists(state,addedId);
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
    state = invalidateTaskApp_lists(state,removedId);
    var inverseIds = inverseTable.get(removedId);
    if(inverseIds === undefined) {
      inverseIds = [];
    } else {
      inverseIds = _.without(inverseIds,id);
    }
    inverseTable = inverseTable.set(removedId,inverseIds);
  }
  state = state.set("TaskApp_lists",inverseTable);
  return state;
}

module.exports.setTaskList_app = setTaskList_app;
function setTaskList_app2(state,id,value) {
  state = invalidateTaskList_app2(state,id);
  var previousValue = getTaskList_app2(state,id);
  var table = state.get("TaskList_app2").set(id,value);
  state = state.set("TaskList_app2",table);
  var inverseTable = state.get("TaskApp_rootList");
  if(value != null) {
    var addedId = value;
    state = invalidateTaskApp_rootList(state,addedId);
    inverseTable = inverseTable.set(addedId,id);
  }
  if(previousValue != null) {
    var removedId = previousValue;
    state = invalidateTaskApp_rootList(state,removedId);
    inverseTable = inverseTable.remove(removedId);
  }
  state = state.set("TaskApp_rootList",inverseTable);
  return state;
}

module.exports.setTaskList_app2 = setTaskList_app2;
function setTaskList_children(state,id,value) {
  state = invalidateTaskList_children(state,id);
  var previousValue = getTaskList_children(state,id);
  var table = state.get("TaskList_children").set(id,value);
  state = state.set("TaskList_children",table);
  var inverseTable = state.get("TaskList_parent");
  var added = _.difference(value,previousValue);
  var removed = _.difference(previousValue,value);
  for (var i = 0 ; i < added.length ; i++) {
    var addedId = added[i];
    state = invalidateTaskList_parent(state,addedId);
    inverseTable = inverseTable.set(addedId,id);
  }
  for (var i = 0 ; i < removed.length ; i++) {
    var removedId = removed[i];
    state = invalidateTaskList_parent(state,removedId);
    inverseTable = inverseTable.remove(removedId);
  }
  state = state.set("TaskList_parent",inverseTable);
  return state;
}

module.exports.setTaskList_children = setTaskList_children;
function setTaskList_parent(state,id,value) {
  state = invalidateTaskList_parent(state,id);
  var previousValue = getTaskList_parent(state,id);
  var table = state.get("TaskList_parent").set(id,value);
  state = state.set("TaskList_parent",table);
  var inverseTable = state.get("TaskList_children");
  if(value != null) {
    var addedId = value;
    state = invalidateTaskList_children(state,addedId);
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
    state = invalidateTaskList_children(state,removedId);
    var inverseIds = inverseTable.get(removedId);
    if(inverseIds === undefined) {
      inverseIds = [];
    } else {
      inverseIds = _.without(inverseIds,id);
    }
    inverseTable = inverseTable.set(removedId,inverseIds);
  }
  state = state.set("TaskList_children",inverseTable);
  return state;
}

module.exports.setTaskList_parent = setTaskList_parent;
function setTaskList_tasks(state,id,value) {
  state = invalidateTaskList_tasks(state,id);
  var previousValue = getTaskList_tasks(state,id);
  var table = state.get("TaskList_tasks").set(id,value);
  state = state.set("TaskList_tasks",table);
  var inverseTable = state.get("Task_list");
  var added = _.difference(value,previousValue);
  var removed = _.difference(previousValue,value);
  for (var i = 0 ; i < added.length ; i++) {
    var addedId = added[i];
    state = invalidateTask_list(state,addedId);
    inverseTable = inverseTable.set(addedId,id);
  }
  for (var i = 0 ; i < removed.length ; i++) {
    var removedId = removed[i];
    state = invalidateTask_list(state,removedId);
    inverseTable = inverseTable.remove(removedId);
  }
  state = state.set("Task_list",inverseTable);
  return state;
}

module.exports.setTaskList_tasks = setTaskList_tasks;
function addTaskApp_lists(state,id,value) {
  var previousValue = getTaskApp_lists(state,id);
  var nextValue = previousValue.concat(value);
  return setTaskApp_lists(state,id,nextValue);
}

module.exports.addTaskApp_lists = addTaskApp_lists;
function addTaskList_children(state,id,value) {
  var previousValue = getTaskList_children(state,id);
  var nextValue = previousValue.concat(value);
  return setTaskList_children(state,id,nextValue);
}

module.exports.addTaskList_children = addTaskList_children;
function addTaskList_tasks(state,id,value) {
  var previousValue = getTaskList_tasks(state,id);
  var nextValue = previousValue.concat(value);
  return setTaskList_tasks(state,id,nextValue);
}

module.exports.addTaskList_tasks = addTaskList_tasks;
function invalidateTask_beingEdited(state,id) {
  state = state.update("Task_beingEdited",function (set) {
          return set.remove(id);
      });
  return state;
}

module.exports.invalidateTask_beingEdited = invalidateTask_beingEdited;
function invalidateTask_description(state,id) {
  return state;
}

module.exports.invalidateTask_description = invalidateTask_description;
function invalidateTask_finished(state,id) {
  state = state.update("Task_finished",function (set) {
          return set.remove(id);
      });
  scoped(scope,{
    $this : id
  },function (scope) {
          var _0 = getTask_inverseAllTasks(state,scope["$this"]);
          if(_0 != null) {
            for (var i = 0 ; i < _0.length ; i++) {
              state = invalidateTaskList_allFinished(state,_0[i]);
            }
          }
      });
  scoped(scope,{
    $this : id
  },function (scope) {
          var _0 = getTask_list(state,scope["$this"]);
          if(_0 != null) {
            state = invalidateTaskList_finished(state,_0);
          }
      });
  scoped(scope,{
    $this : id
  },function (scope) {
          var _0 = getTask_list(state,scope["$this"]);
          if(_0 != null) {
            state = invalidateTaskList_finishedTasks(state,_0);
          }
      });
  scoped(scope,{
    $this : id
  },function (scope) {
          var _0 = getTask_inverseAllTasks(state,scope["$this"]);
          var _1 = getTaskList_app2_Many(state,_0);
          if(_1 != null) {
            for (var i = 0 ; i < _1.length ; i++) {
              state = invalidateTaskApp_remainder(state,_1[i]);
            }
          }
      });
  return state;
}

module.exports.invalidateTask_finished = invalidateTask_finished;
function invalidateTask_inverseAllTasks(state,id) {
  state = state.update("Task_inverseAllTasks",function (set) {
          return set.remove(id);
      });
  return state;
}

module.exports.invalidateTask_inverseAllTasks = invalidateTask_inverseAllTasks;
function invalidateTask_inverseFinishedTasks(state,id) {
  state = state.update("Task_inverseFinishedTasks",function (set) {
          return set.remove(id);
      });
  return state;
}

module.exports.invalidateTask_inverseFinishedTasks = invalidateTask_inverseFinishedTasks;
function invalidateTask_inverseVisibleTasks(state,id) {
  state = state.update("Task_inverseVisibleTasks",function (set) {
          return set.remove(id);
      });
  return state;
}

module.exports.invalidateTask_inverseVisibleTasks = invalidateTask_inverseVisibleTasks;
function invalidateTask_list(state,id) {
  if(id != null) {
    state = invalidateTask_beingEdited(state,id);
  }
  return state;
}

module.exports.invalidateTask_list = invalidateTask_list;
function invalidateTask_taskApp(state,id) {
  return state;
}

module.exports.invalidateTask_taskApp = invalidateTask_taskApp;
function invalidateTaskApp_filter(state,id) {
  state = state.update("TaskApp_filter",function (set) {
          return set.remove(id);
      });
  scoped(scope,{
    $this : id
  },function (scope) {
          var _0 = getTaskApp_lists(state,scope["$this"]);
          if(_0 != null) {
            for (var i = 0 ; i < _0.length ; i++) {
              state = invalidateTaskList_visibleTasks(state,_0[i]);
            }
          }
      });
  return state;
}

module.exports.invalidateTaskApp_filter = invalidateTaskApp_filter;
function invalidateTaskApp_input(state,id) {
  state = state.update("TaskApp_input",function (set) {
          return set.remove(id);
      });
  return state;
}

module.exports.invalidateTaskApp_input = invalidateTaskApp_input;
function invalidateTaskApp_remainder(state,id) {
  state = state.update("TaskApp_remainder",function (set) {
          return set.remove(id);
      });
  return state;
}

module.exports.invalidateTaskApp_remainder = invalidateTaskApp_remainder;
function invalidateTaskApp_editing(state,id) {
  scoped(scope,{
    $this : id
  },function (scope) {
          var _0 = getTaskApp_lists(state,scope["$this"]);
          var _1 = getTaskList_tasks_Many(state,_0);
          if(_1 != null) {
            for (var i = 0 ; i < _1.length ; i++) {
              state = invalidateTask_beingEdited(state,_1[i]);
            }
          }
      });
  return state;
}

module.exports.invalidateTaskApp_editing = invalidateTaskApp_editing;
function invalidateTaskApp_lists(state,id) {
  return state;
}

module.exports.invalidateTaskApp_lists = invalidateTaskApp_lists;
function invalidateTaskApp_rootList(state,id) {
  if(id != null) {
    state = invalidateTaskApp_remainder(state,id);
  }
  scoped(scope,{
    $this : id
  },function (scope) {
          var _0 = getTaskApp_lists(state,scope["$this"]);
          if(_0 != null) {
            for (var i = 0 ; i < _0.length ; i++) {
              state = invalidateTaskList_rootDistance(state,_0[i]);
            }
          }
      });
  return state;
}

module.exports.invalidateTaskApp_rootList = invalidateTaskApp_rootList;
function invalidateTaskList_allFinished(state,id) {
  state = state.update("TaskList_allFinished",function (set) {
          return set.remove(id);
      });
  return state;
}

module.exports.invalidateTaskList_allFinished = invalidateTaskList_allFinished;
function invalidateTaskList_finished(state,id) {
  state = state.update("TaskList_finished",function (set) {
          return set.remove(id);
      });
  scoped(scope,{
    $this : id
  },function (scope) {
          var _0 = getTaskList_parent(state,scope["$this"]);
          if(_0 != null) {
            state = invalidateTaskList_finished(state,_0);
          }
      });
  return state;
}

module.exports.invalidateTaskList_finished = invalidateTaskList_finished;
function invalidateTaskList_rootDistance(state,id) {
  state = state.update("TaskList_rootDistance",function (set) {
          return set.remove(id);
      });
  scoped(scope,{
    $this : id
  },function (scope) {
          var _0 = getTaskList_children(state,scope["$this"]);
          if(_0 != null) {
            for (var i = 0 ; i < _0.length ; i++) {
              state = invalidateTaskList_rootDistance(state,_0[i]);
            }
          }
      });
  return state;
}

module.exports.invalidateTaskList_rootDistance = invalidateTaskList_rootDistance;
function invalidateTaskList_allTasks(state,id) {
  state = state.update("TaskList_allTasks",function (set) {
          return set.remove(id);
      });
  if(id != null) {
    state = invalidateTaskList_allFinished(state,id);
  }
  scoped(scope,{
    $this : id
  },function (scope) {
          var _0 = getTaskList_parent(state,scope["$this"]);
          if(_0 != null) {
            state = invalidateTaskList_allTasks(state,_0);
          }
      });
  scoped(scope,{
    $this : id
  },function (scope) {
          var _0 = getTaskList_app2(state,scope["$this"]);
          if(_0 != null) {
            state = invalidateTaskApp_remainder(state,_0);
          }
      });
  return state;
}

module.exports.invalidateTaskList_allTasks = invalidateTaskList_allTasks;
function invalidateTaskList_app(state,id) {
  scoped(scope,{
    $this : id
  },function (scope) {
          var _0 = getTaskList_tasks(state,scope["$this"]);
          if(_0 != null) {
            for (var i = 0 ; i < _0.length ; i++) {
              state = invalidateTask_beingEdited(state,_0[i]);
            }
          }
      });
  if(id != null) {
    state = invalidateTaskList_rootDistance(state,id);
  }
  if(id != null) {
    state = invalidateTaskList_visibleTasks(state,id);
  }
  return state;
}

module.exports.invalidateTaskList_app = invalidateTaskList_app;
function invalidateTaskList_app2(state,id) {
  return state;
}

module.exports.invalidateTaskList_app2 = invalidateTaskList_app2;
function invalidateTaskList_children(state,id) {
  if(id != null) {
    state = invalidateTaskList_allTasks(state,id);
  }
  if(id != null) {
    state = invalidateTaskList_finished(state,id);
  }
  return state;
}

module.exports.invalidateTaskList_children = invalidateTaskList_children;
function invalidateTaskList_finishedTasks(state,id) {
  state = state.update("TaskList_finishedTasks",function (set) {
          return set.remove(id);
      });
  if(id != null) {
    state = invalidateTaskList_visibleTasks(state,id);
  }
  return state;
}

module.exports.invalidateTaskList_finishedTasks = invalidateTaskList_finishedTasks;
function invalidateTaskList_parent(state,id) {
  if(id != null) {
    state = invalidateTaskList_rootDistance(state,id);
  }
  if(id != null) {
    state = invalidateTaskList_rootList(state,id);
  }
  return state;
}

module.exports.invalidateTaskList_parent = invalidateTaskList_parent;
function invalidateTaskList_rootList(state,id) {
  state = state.update("TaskList_rootList",function (set) {
          return set.remove(id);
      });
  scoped(scope,{
    $this : id
  },function (scope) {
          var _0 = getTaskList_children(state,scope["$this"]);
          if(_0 != null) {
            for (var i = 0 ; i < _0.length ; i++) {
              state = invalidateTaskList_rootList(state,_0[i]);
            }
          }
      });
  return state;
}

module.exports.invalidateTaskList_rootList = invalidateTaskList_rootList;
function invalidateTaskList_rootListInverse(state,id) {
  state = state.update("TaskList_rootListInverse",function (set) {
          return set.remove(id);
      });
  return state;
}

module.exports.invalidateTaskList_rootListInverse = invalidateTaskList_rootListInverse;
function invalidateTaskList_tasks(state,id) {
  if(id != null) {
    state = invalidateTaskList_allTasks(state,id);
  }
  if(id != null) {
    state = invalidateTaskList_finished(state,id);
  }
  if(id != null) {
    state = invalidateTaskList_finishedTasks(state,id);
  }
  if(id != null) {
    state = invalidateTaskList_visibleTasks(state,id);
  }
  return state;
}

module.exports.invalidateTaskList_tasks = invalidateTaskList_tasks;
function invalidateTaskList_visibleTasks(state,id) {
  state = state.update("TaskList_visibleTasks",function (set) {
          return set.remove(id);
      });
  return state;
}

module.exports.invalidateTaskList_visibleTasks = invalidateTaskList_visibleTasks;
function calculateTask_beingEdited(state,id) {
  var result = getTask_beingEdited(state,id);
  if(result === undefined) {
    scoped(scope,{
      $this : id
    },function (scope) {
            var _5 ;
            var _1 = getTask_list(state,scope["$this"]);
            var _2 = getTaskList_app(state,_1);
            var _3 = getTaskApp_editing(state,_2);
            var _4 = _3 !== null && scope["$this"] !== null ? _3 === scope["$this"] : null;
            if(_4 !== null) {
              _5 = _4;
            } else {
              _5 = false;
            }
            result = _5;
            state = state.update("Task_beingEdited",function (table) {
                    return table.set(id,_5);
                });
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateTask_beingEdited = calculateTask_beingEdited;
function calculateTask_beingEdited_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateTask_beingEdited(state,id);
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

module.exports.calculateTask_beingEdited_Many = calculateTask_beingEdited_Many;
function calculateTask_finished(state,id) {
  var result = getTask_finished(state,id);
  if(result === undefined) {
    scoped(scope,{
      $this : id
    },function (scope) {
            result = false;
            state = state.update("Task_finished",function (table) {
                    return table.set(id,false);
                });
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateTask_finished = calculateTask_finished;
function calculateTask_finished_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateTask_finished(state,id);
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

module.exports.calculateTask_finished_Many = calculateTask_finished_Many;
function calculateTaskApp_filter(state,id) {
  var result = getTaskApp_filter(state,id);
  if(result === undefined) {
    scoped(scope,{
      $this : id
    },function (scope) {
            result = "All";
            state = state.update("TaskApp_filter",function (table) {
                    return table.set(id,"All");
                });
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateTaskApp_filter = calculateTaskApp_filter;
function calculateTaskApp_filter_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateTaskApp_filter(state,id);
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

module.exports.calculateTaskApp_filter_Many = calculateTaskApp_filter_Many;
function calculateTaskApp_input(state,id) {
  var result = getTaskApp_input(state,id);
  if(result === undefined) {
    scoped(scope,{
      $this : id
    },function (scope) {
            result = "";
            state = state.update("TaskApp_input",function (table) {
                    return table.set(id,"");
                });
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateTaskApp_input = calculateTaskApp_input;
function calculateTaskApp_input_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateTaskApp_input(state,id);
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

module.exports.calculateTaskApp_input_Many = calculateTaskApp_input_Many;
function calculateTaskApp_remainder(state,id) {
  var result = getTaskApp_remainder(state,id);
  if(result === undefined) {
    scoped(scope,{
      $this : id
    },function (scope) {
            var _1 = getTaskApp_rootList(state,scope["$this"]);
            var _2 ;
            if(_1 != null) {
              var calc = calculateTaskList_allTasks(state,_1);
              state = calc.state;
              _2 = calc.result;
            } else {
              _2 = constants.EMPTY_ARRAY;
            }
            var _3 = constants.EMPTY_ARRAY;
            for (var _4 = 0 ; _4 < _2.length ; _4++) {
              var oldScope = scope;
               ( function () {
                      var scope = _.assign({
                      },oldScope,{
                        task : _2[_4]
                      });
                      var _5 ;
                      if(scope.task != null) {
                        var calc = calculateTask_finished(state,scope.task);
                        state = calc.state;
                        _5 = calc.result;
                      } else {
                        _5 = null;
                      }
                      var _6 = !_5;
                      if(_6) {
                        _3 = _3.concat([scope.task]);
                      }
                  } ) ();
            }
            var _8 = expression.count(_3);
            result = _8;
            state = state.update("TaskApp_remainder",function (table) {
                    return table.set(id,_8);
                });
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateTaskApp_remainder = calculateTaskApp_remainder;
function calculateTaskApp_remainder_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateTaskApp_remainder(state,id);
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

module.exports.calculateTaskApp_remainder_Many = calculateTaskApp_remainder_Many;
function calculateTaskList_allFinished(state,id) {
  var result = getTaskList_allFinished(state,id);
  if(result === undefined) {
    scoped(scope,{
      $this : id
    },function (scope) {
            var _1 ;
            if(scope["$this"] != null) {
              var calc = calculateTaskList_allTasks(state,scope["$this"]);
              state = calc.state;
              _1 = calc.result;
            } else {
              _1 = constants.EMPTY_ARRAY;
            }
            var _2 ;
            if(_1 != constants.EMPTY_ARRAY) {
              var calc = calculateTask_finished_Many(state,_1);
              state = calc.state;
              _2 = calc.result;
            } else {
              _2 = constants.EMPTY_ARRAY;
            }
            var _3 = expression.conj(_2);
            result = _3;
            state = state.update("TaskList_allFinished",function (table) {
                    return table.set(id,_3);
                });
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateTaskList_allFinished = calculateTaskList_allFinished;
function calculateTaskList_allFinished_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateTaskList_allFinished(state,id);
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

module.exports.calculateTaskList_allFinished_Many = calculateTaskList_allFinished_Many;
function calculateTaskList_finished(state,id) {
  var result = getTaskList_finished(state,id);
  if(result === undefined) {
    scoped(scope,{
      $this : id
    },function (scope) {
            var _7 ;
            var _1 = getTaskList_tasks(state,scope["$this"]);
            var _2 ;
            if(_1 != constants.EMPTY_ARRAY) {
              var calc = calculateTask_finished_Many(state,_1);
              state = calc.state;
              _2 = calc.result;
            } else {
              _2 = constants.EMPTY_ARRAY;
            }
            var _3 = expression.conj(_2);
            if(_3 === false) {
              _7 = _3;
            } else {
              var _4 = getTaskList_children(state,scope["$this"]);
              var _5 ;
              if(_4 != constants.EMPTY_ARRAY) {
                var calc = calculateTaskList_finished_Many(state,_4);
                state = calc.state;
                _5 = calc.result;
              } else {
                _5 = constants.EMPTY_ARRAY;
              }
              var _6 = expression.conj(_5);
              _7 = _6;
            }
            result = _7;
            state = state.update("TaskList_finished",function (table) {
                    return table.set(id,_7);
                });
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateTaskList_finished = calculateTaskList_finished;
function calculateTaskList_finished_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateTaskList_finished(state,id);
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

module.exports.calculateTaskList_finished_Many = calculateTaskList_finished_Many;
function calculateTaskList_rootDistance(state,id) {
  var result = getTaskList_rootDistance(state,id);
  if(result === undefined) {
    scoped(scope,{
      $this : id
    },function (scope) {
            var _8 ;
            var _7 ;
            var _1 = getTaskList_app(state,scope["$this"]);
            var _2 = getTaskApp_rootList(state,_1);
            var _3 = _2 !== null && scope["$this"] !== null ? _2 === scope["$this"] : null;
            if(_3) {
              _7 = 0;
            } else {
              var _4 = getTaskList_parent(state,scope["$this"]);
              var _5 ;
              if(_4 != null) {
                var calc = calculateTaskList_rootDistance(state,_4);
                state = calc.state;
                _5 = calc.result;
              } else {
                _5 = null;
              }
              var _6 = _5 !== null ? 1 + _5 : null;
              _7 = _6;
            }
            if(_7 !== null) {
              _8 = _7;
            } else {
              _8 = 0;
            }
            result = _8;
            state = state.update("TaskList_rootDistance",function (table) {
                    return table.set(id,_8);
                });
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateTaskList_rootDistance = calculateTaskList_rootDistance;
function calculateTaskList_rootDistance_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateTaskList_rootDistance(state,id);
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

module.exports.calculateTaskList_rootDistance_Many = calculateTaskList_rootDistance_Many;
function calculateTaskList_allTasks(state,id) {
  var result = getTaskList_allTasks(state,id);
  if(result === undefined) {
    scoped(scope,{
      $this : id
    },function (scope) {
            var _1 = getTaskList_tasks(state,scope["$this"]);
            var _2 = getTaskList_children(state,scope["$this"]);
            var _3 ;
            if(_2 != constants.EMPTY_ARRAY) {
              var calc = calculateTaskList_allTasks_Many(state,_2);
              state = calc.state;
              _3 = calc.result;
            } else {
              _3 = constants.EMPTY_ARRAY;
            }
            var _4 = _1.concat(_3);
            result = _4;
            var previousValue = getTaskList_allTasks(state,id);
            var table = state.get("TaskList_allTasks").set(id,_4);
            state = state.set("TaskList_allTasks",table);
            var inverseTable = state.get("Task_inverseAllTasks");
            var added = _.difference(_4,previousValue);
            var removed = _.difference(previousValue,_4);
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
            state = state.set("Task_inverseAllTasks",inverseTable);
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateTaskList_allTasks = calculateTaskList_allTasks;
function calculateTaskList_allTasks_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateTaskList_allTasks(state,id);
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

module.exports.calculateTaskList_allTasks_Many = calculateTaskList_allTasks_Many;
function calculateTaskList_finishedTasks(state,id) {
  var result = getTaskList_finishedTasks(state,id);
  if(result === undefined) {
    scoped(scope,{
      $this : id
    },function (scope) {
            var _1 = getTaskList_tasks(state,scope["$this"]);
            var _2 = constants.EMPTY_ARRAY;
            for (var _3 = 0 ; _3 < _1.length ; _3++) {
              var oldScope = scope;
               ( function () {
                      var scope = _.assign({
                      },oldScope,{
                        task : _1[_3]
                      });
                      var _4 ;
                      if(scope.task != null) {
                        var calc = calculateTask_finished(state,scope.task);
                        state = calc.state;
                        _4 = calc.result;
                      } else {
                        _4 = null;
                      }
                      if(_4) {
                        _2 = _2.concat([scope.task]);
                      }
                  } ) ();
            }
            result = _2;
            var previousValue = getTaskList_finishedTasks(state,id);
            var table = state.get("TaskList_finishedTasks").set(id,_2);
            state = state.set("TaskList_finishedTasks",table);
            var inverseTable = state.get("Task_inverseFinishedTasks");
            var added = _.difference(_2,previousValue);
            var removed = _.difference(previousValue,_2);
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
            state = state.set("Task_inverseFinishedTasks",inverseTable);
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateTaskList_finishedTasks = calculateTaskList_finishedTasks;
function calculateTaskList_finishedTasks_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateTaskList_finishedTasks(state,id);
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

module.exports.calculateTaskList_finishedTasks_Many = calculateTaskList_finishedTasks_Many;
function calculateTaskList_rootList(state,id) {
  var result = getTaskList_rootList(state,id);
  if(result === undefined) {
    scoped(scope,{
      $this : id
    },function (scope) {
            var _3 ;
            var _1 = getTaskList_parent(state,scope["$this"]);
            var _2 ;
            if(_1 != null) {
              var calc = calculateTaskList_rootList(state,_1);
              state = calc.state;
              _2 = calc.result;
            } else {
              _2 = null;
            }
            if(_2 !== null) {
              _3 = _2;
            } else {
              _3 = scope["$this"];
            }
            result = _3;
            var previousValue = getTaskList_rootList(state,id);
            var table = state.get("TaskList_rootList").set(id,_3);
            state = state.set("TaskList_rootList",table);
            var inverseTable = state.get("TaskList_rootListInverse");
            if(_3 != null) {
              var addedId = _3;
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
              var inverseIds = inverseTable.get(removedId);
              if(inverseIds === undefined) {
                inverseIds = [];
              } else {
                inverseIds = _.without(inverseIds,id);
              }
              inverseTable = inverseTable.set(removedId,inverseIds);
            }
            state = state.set("TaskList_rootListInverse",inverseTable);
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateTaskList_rootList = calculateTaskList_rootList;
function calculateTaskList_rootList_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateTaskList_rootList(state,id);
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

module.exports.calculateTaskList_rootList_Many = calculateTaskList_rootList_Many;
function calculateTaskList_visibleTasks(state,id) {
  var result = getTaskList_visibleTasks(state,id);
  if(result === undefined) {
    scoped(scope,{
      $this : id
    },function (scope) {
            var _18 ;
            var _1 = getTaskList_app(state,scope["$this"]);
            var _2 ;
            if(_1 != null) {
              var calc = calculateTaskApp_filter(state,_1);
              state = calc.state;
              _2 = calc.result;
            } else {
              _2 = null;
            }
            var _3 = _2 !== null ? _2 === "All" : null;
            if(_3) {
              var _4 = getTaskList_tasks(state,scope["$this"]);
              _18 = _4;
            } else {
              var _17 ;
              var _5 = getTaskList_app(state,scope["$this"]);
              var _6 ;
              if(_5 != null) {
                var calc = calculateTaskApp_filter(state,_5);
                state = calc.state;
                _6 = calc.result;
              } else {
                _6 = null;
              }
              var _7 = _6 !== null ? _6 === "Completed" : null;
              if(_7) {
                var _8 ;
                if(scope["$this"] != null) {
                  var calc = calculateTaskList_finishedTasks(state,scope["$this"]);
                  state = calc.state;
                  _8 = calc.result;
                } else {
                  _8 = constants.EMPTY_ARRAY;
                }
                _17 = _8;
              } else {
                var _16 ;
                var _9 = getTaskList_app(state,scope["$this"]);
                var _10 ;
                if(_9 != null) {
                  var calc = calculateTaskApp_filter(state,_9);
                  state = calc.state;
                  _10 = calc.result;
                } else {
                  _10 = null;
                }
                var _11 = _10 !== null ? _10 === "Not Completed" : null;
                if(_11) {
                  var _12 = getTaskList_tasks(state,scope["$this"]);
                  var _13 ;
                  if(scope["$this"] != null) {
                    var calc = calculateTaskList_finishedTasks(state,scope["$this"]);
                    state = calc.state;
                    _13 = calc.result;
                  } else {
                    _13 = constants.EMPTY_ARRAY;
                  }
                  var _14 = _.difference(_12,_13);
                  _16 = _14;
                } else {
                  var _15 = getTaskList_tasks(state,scope["$this"]);
                  _16 = _15;
                }
                _17 = _16;
              }
              _18 = _17;
            }
            result = _18;
            var previousValue = getTaskList_visibleTasks(state,id);
            var table = state.get("TaskList_visibleTasks").set(id,_18);
            state = state.set("TaskList_visibleTasks",table);
            var inverseTable = state.get("Task_inverseVisibleTasks");
            var added = _.difference(_18,previousValue);
            var removed = _.difference(previousValue,_18);
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
            state = state.set("Task_inverseVisibleTasks",inverseTable);
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateTaskList_visibleTasks = calculateTaskList_visibleTasks;
function calculateTaskList_visibleTasks_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateTaskList_visibleTasks(state,id);
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

module.exports.calculateTaskList_visibleTasks_Many = calculateTaskList_visibleTasks_Many;
function init(state) {
  var app = {
    id : "app"
  };
  state = state.update("TaskApp",function (table) {
          return table.set(app.id,app);
      });
  var noname1 = {
    id : "noname1"
  };
  state = state.update("TaskList",function (table) {
          return table.set(noname1.id,noname1);
      });
  state = addTaskApp_lists(state,app.id,noname1.id);
  state = setTaskApp_rootList(state,app.id,noname1.id);
  return {
    state : state,
    ids : {
      app : app.id,
      noname1 : noname1.id
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
                    var _0 = React.createElement(Component.TaskApp,{
                      app : scope.app
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
                    expression : "@TaskApp(app) {\n}",
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
  "setTask_description" : function (state,action) {
          return setTask_description(state,action.id,action.value);
      },
  "setTask_finished" : function (state,action) {
          return setTask_finished(state,action.id,action.value);
      },
  "addTask_inverseAllTasks" : function (state,action) {
          return addTask_inverseAllTasks(state,action.id,action.value);
      },
  "addTask_inverseFinishedTasks" : function (state,action) {
          return addTask_inverseFinishedTasks(state,action.id,action.value);
      },
  "addTask_inverseVisibleTasks" : function (state,action) {
          return addTask_inverseVisibleTasks(state,action.id,action.value);
      },
  "setTask_list" : function (state,action) {
          return setTask_list(state,action.id,action.value);
      },
  "setTask_taskApp" : function (state,action) {
          return setTask_taskApp(state,action.id,action.value);
      },
  "setTaskApp_filter" : function (state,action) {
          return setTaskApp_filter(state,action.id,action.value);
      },
  "setTaskApp_input" : function (state,action) {
          return setTaskApp_input(state,action.id,action.value);
      },
  "setTaskApp_editing" : function (state,action) {
          return setTaskApp_editing(state,action.id,action.value);
      },
  "setTaskApp_lists" : function (state,action) {
          return setTaskApp_lists(state,action.id,action.value);
      },
  "addTaskApp_lists" : function (state,action) {
          return addTaskApp_lists(state,action.id,action.value);
      },
  "setTaskApp_rootList" : function (state,action) {
          return setTaskApp_rootList(state,action.id,action.value);
      },
  "addTaskList_allTasks" : function (state,action) {
          return addTaskList_allTasks(state,action.id,action.value);
      },
  "setTaskList_app" : function (state,action) {
          return setTaskList_app(state,action.id,action.value);
      },
  "setTaskList_app2" : function (state,action) {
          return setTaskList_app2(state,action.id,action.value);
      },
  "setTaskList_children" : function (state,action) {
          return setTaskList_children(state,action.id,action.value);
      },
  "addTaskList_children" : function (state,action) {
          return addTaskList_children(state,action.id,action.value);
      },
  "addTaskList_finishedTasks" : function (state,action) {
          return addTaskList_finishedTasks(state,action.id,action.value);
      },
  "setTaskList_parent" : function (state,action) {
          return setTaskList_parent(state,action.id,action.value);
      },
  "addTaskList_rootListInverse" : function (state,action) {
          return addTaskList_rootListInverse(state,action.id,action.value);
      },
  "setTaskList_tasks" : function (state,action) {
          return setTaskList_tasks(state,action.id,action.value);
      },
  "addTaskList_tasks" : function (state,action) {
          return addTaskList_tasks(state,action.id,action.value);
      },
  "addTaskList_visibleTasks" : function (state,action) {
          return addTaskList_visibleTasks(state,action.id,action.value);
      },
  "calculateTask_beingEdited" : function (state,action) {
          return calculateTask_beingEdited(state,action.id).state;
      },
  "calculateTask_beingEdited_Many" : function (state,action) {
          return calculateTask_beingEdited_Many(state,action.ids).state;
      },
  "calculateTask_finished" : function (state,action) {
          return calculateTask_finished(state,action.id).state;
      },
  "calculateTask_finished_Many" : function (state,action) {
          return calculateTask_finished_Many(state,action.ids).state;
      },
  "calculateTaskApp_filter" : function (state,action) {
          return calculateTaskApp_filter(state,action.id).state;
      },
  "calculateTaskApp_filter_Many" : function (state,action) {
          return calculateTaskApp_filter_Many(state,action.ids).state;
      },
  "calculateTaskApp_input" : function (state,action) {
          return calculateTaskApp_input(state,action.id).state;
      },
  "calculateTaskApp_input_Many" : function (state,action) {
          return calculateTaskApp_input_Many(state,action.ids).state;
      },
  "calculateTaskApp_remainder" : function (state,action) {
          return calculateTaskApp_remainder(state,action.id).state;
      },
  "calculateTaskApp_remainder_Many" : function (state,action) {
          return calculateTaskApp_remainder_Many(state,action.ids).state;
      },
  "calculateTaskList_allFinished" : function (state,action) {
          return calculateTaskList_allFinished(state,action.id).state;
      },
  "calculateTaskList_allFinished_Many" : function (state,action) {
          return calculateTaskList_allFinished_Many(state,action.ids).state;
      },
  "calculateTaskList_finished" : function (state,action) {
          return calculateTaskList_finished(state,action.id).state;
      },
  "calculateTaskList_finished_Many" : function (state,action) {
          return calculateTaskList_finished_Many(state,action.ids).state;
      },
  "calculateTaskList_rootDistance" : function (state,action) {
          return calculateTaskList_rootDistance(state,action.id).state;
      },
  "calculateTaskList_rootDistance_Many" : function (state,action) {
          return calculateTaskList_rootDistance_Many(state,action.ids).state;
      },
  "calculateTaskList_allTasks" : function (state,action) {
          return calculateTaskList_allTasks(state,action.id).state;
      },
  "calculateTaskList_allTasks_Many" : function (state,action) {
          return calculateTaskList_allTasks_Many(state,action.ids).state;
      },
  "calculateTaskList_finishedTasks" : function (state,action) {
          return calculateTaskList_finishedTasks(state,action.id).state;
      },
  "calculateTaskList_finishedTasks_Many" : function (state,action) {
          return calculateTaskList_finishedTasks_Many(state,action.ids).state;
      },
  "calculateTaskList_rootList" : function (state,action) {
          return calculateTaskList_rootList(state,action.id).state;
      },
  "calculateTaskList_rootList_Many" : function (state,action) {
          return calculateTaskList_rootList_Many(state,action.ids).state;
      },
  "calculateTaskList_visibleTasks" : function (state,action) {
          return calculateTaskList_visibleTasks(state,action.id).state;
      },
  "calculateTaskList_visibleTasks_Many" : function (state,action) {
          return calculateTaskList_visibleTasks_Many(state,action.ids).state;
      }
};
module.exports.actions = actions;
var actionCreators = {
  "init" : function () {
          return {
            type : "init"
          };
      },
  "setTask_description" : function (id,value) {
          return {
            type : "setTask_description",
            id : id,
            value : value
          };
      },
  "setTask_finished" : function (id,value) {
          return {
            type : "setTask_finished",
            id : id,
            value : value
          };
      },
  "addTask_inverseAllTasks" : function (id,value) {
          return {
            type : "addTask_inverseAllTasks",
            id : id,
            value : value
          };
      },
  "addTask_inverseFinishedTasks" : function (id,value) {
          return {
            type : "addTask_inverseFinishedTasks",
            id : id,
            value : value
          };
      },
  "addTask_inverseVisibleTasks" : function (id,value) {
          return {
            type : "addTask_inverseVisibleTasks",
            id : id,
            value : value
          };
      },
  "setTask_list" : function (id,value) {
          return {
            type : "setTask_list",
            id : id,
            value : value
          };
      },
  "setTask_taskApp" : function (id,value) {
          return {
            type : "setTask_taskApp",
            id : id,
            value : value
          };
      },
  "setTaskApp_filter" : function (id,value) {
          return {
            type : "setTaskApp_filter",
            id : id,
            value : value
          };
      },
  "setTaskApp_input" : function (id,value) {
          return {
            type : "setTaskApp_input",
            id : id,
            value : value
          };
      },
  "setTaskApp_editing" : function (id,value) {
          return {
            type : "setTaskApp_editing",
            id : id,
            value : value
          };
      },
  "setTaskApp_lists" : function (id,value) {
          return {
            type : "setTaskApp_lists",
            id : id,
            value : value
          };
      },
  "addTaskApp_lists" : function (id,value) {
          return {
            type : "addTaskApp_lists",
            id : id,
            value : value
          };
      },
  "setTaskApp_rootList" : function (id,value) {
          return {
            type : "setTaskApp_rootList",
            id : id,
            value : value
          };
      },
  "addTaskList_allTasks" : function (id,value) {
          return {
            type : "addTaskList_allTasks",
            id : id,
            value : value
          };
      },
  "setTaskList_app" : function (id,value) {
          return {
            type : "setTaskList_app",
            id : id,
            value : value
          };
      },
  "setTaskList_app2" : function (id,value) {
          return {
            type : "setTaskList_app2",
            id : id,
            value : value
          };
      },
  "setTaskList_children" : function (id,value) {
          return {
            type : "setTaskList_children",
            id : id,
            value : value
          };
      },
  "addTaskList_children" : function (id,value) {
          return {
            type : "addTaskList_children",
            id : id,
            value : value
          };
      },
  "addTaskList_finishedTasks" : function (id,value) {
          return {
            type : "addTaskList_finishedTasks",
            id : id,
            value : value
          };
      },
  "setTaskList_parent" : function (id,value) {
          return {
            type : "setTaskList_parent",
            id : id,
            value : value
          };
      },
  "addTaskList_rootListInverse" : function (id,value) {
          return {
            type : "addTaskList_rootListInverse",
            id : id,
            value : value
          };
      },
  "setTaskList_tasks" : function (id,value) {
          return {
            type : "setTaskList_tasks",
            id : id,
            value : value
          };
      },
  "addTaskList_tasks" : function (id,value) {
          return {
            type : "addTaskList_tasks",
            id : id,
            value : value
          };
      },
  "addTaskList_visibleTasks" : function (id,value) {
          return {
            type : "addTaskList_visibleTasks",
            id : id,
            value : value
          };
      },
  "calculateTask_beingEdited" : function (id) {
          return {
            type : "calculateTask_beingEdited",
            id : id
          };
      },
  "calculateTask_beingEdited_Many" : function (ids) {
          return {
            type : "calculateTask_beingEdited_Many",
            id : ids
          };
      },
  "calculateTask_finished" : function (id) {
          return {
            type : "calculateTask_finished",
            id : id
          };
      },
  "calculateTask_finished_Many" : function (ids) {
          return {
            type : "calculateTask_finished_Many",
            id : ids
          };
      },
  "calculateTaskApp_filter" : function (id) {
          return {
            type : "calculateTaskApp_filter",
            id : id
          };
      },
  "calculateTaskApp_filter_Many" : function (ids) {
          return {
            type : "calculateTaskApp_filter_Many",
            id : ids
          };
      },
  "calculateTaskApp_input" : function (id) {
          return {
            type : "calculateTaskApp_input",
            id : id
          };
      },
  "calculateTaskApp_input_Many" : function (ids) {
          return {
            type : "calculateTaskApp_input_Many",
            id : ids
          };
      },
  "calculateTaskApp_remainder" : function (id) {
          return {
            type : "calculateTaskApp_remainder",
            id : id
          };
      },
  "calculateTaskApp_remainder_Many" : function (ids) {
          return {
            type : "calculateTaskApp_remainder_Many",
            id : ids
          };
      },
  "calculateTaskList_allFinished" : function (id) {
          return {
            type : "calculateTaskList_allFinished",
            id : id
          };
      },
  "calculateTaskList_allFinished_Many" : function (ids) {
          return {
            type : "calculateTaskList_allFinished_Many",
            id : ids
          };
      },
  "calculateTaskList_finished" : function (id) {
          return {
            type : "calculateTaskList_finished",
            id : id
          };
      },
  "calculateTaskList_finished_Many" : function (ids) {
          return {
            type : "calculateTaskList_finished_Many",
            id : ids
          };
      },
  "calculateTaskList_rootDistance" : function (id) {
          return {
            type : "calculateTaskList_rootDistance",
            id : id
          };
      },
  "calculateTaskList_rootDistance_Many" : function (ids) {
          return {
            type : "calculateTaskList_rootDistance_Many",
            id : ids
          };
      },
  "calculateTaskList_allTasks" : function (id) {
          return {
            type : "calculateTaskList_allTasks",
            id : id
          };
      },
  "calculateTaskList_allTasks_Many" : function (ids) {
          return {
            type : "calculateTaskList_allTasks_Many",
            id : ids
          };
      },
  "calculateTaskList_finishedTasks" : function (id) {
          return {
            type : "calculateTaskList_finishedTasks",
            id : id
          };
      },
  "calculateTaskList_finishedTasks_Many" : function (ids) {
          return {
            type : "calculateTaskList_finishedTasks_Many",
            id : ids
          };
      },
  "calculateTaskList_rootList" : function (id) {
          return {
            type : "calculateTaskList_rootList",
            id : id
          };
      },
  "calculateTaskList_rootList_Many" : function (ids) {
          return {
            type : "calculateTaskList_rootList_Many",
            id : ids
          };
      },
  "calculateTaskList_visibleTasks" : function (id) {
          return {
            type : "calculateTaskList_visibleTasks",
            id : id
          };
      },
  "calculateTaskList_visibleTasks_Many" : function (ids) {
          return {
            type : "calculateTaskList_visibleTasks_Many",
            id : ids
          };
      },
  "createTask" : function (entity) {
          return {
            type : "createTask",
            entity : entity
          };
      },
  "createTaskApp" : function (entity) {
          return {
            type : "createTaskApp",
            entity : entity
          };
      },
  "createTaskList" : function (entity) {
          return {
            type : "createTaskList",
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
          TaskList : Lifted(function TaskList(props,state) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _3 ;
                  if(scope.list != null) {
                    var calc = calculateTaskList_allFinished(state,scope.list);
                    state = calc.state;
                    _3 = calc.result;
                  } else {
                    _3 = null;
                  }
                  var _2 = React.createElement(Component.Checkbox,{
                    checked : _3,
                    onChange : scope.toggleChildren
                  });
                  var _4 = React.createElement("button",{
                    onClick : scope["setAsRoot"]()
                  },"Zoom");
                  var _11 ;
                  var _6 = getTaskList_app(state,scope.list);
                  var _7 = getTaskApp_rootList(state,_6);
                  var _8 = _7 !== null && scope.list !== null ? _7 !== scope.list : null;
                  if(_8) {
                    var _9 = React.createElement("button",{
                      onClick : scope["deleteList"]()
                    },"Delete List");
                    _11 = _9;
                  } else {
                    _11 = null;
                  }
                  var _17 ;
                  var _12 = getTaskList_app(state,scope.list);
                  var _13 ;
                  if(_12 != null) {
                    var calc = calculateTaskApp_input(state,_12);
                    state = calc.state;
                    _13 = calc.result;
                  } else {
                    _13 = null;
                  }
                  var _14 = _13 !== null ? _13 !== "" : null;
                  if(_14) {
                    var _15 = React.createElement("button",{
                      onClick : scope["addTaskHere"]()
                    },"Add task");
                    _17 = _15;
                  } else {
                    _17 = null;
                  }
                  var _19 ;
                  if(scope.list != null) {
                    var calc = calculateTaskList_visibleTasks(state,scope.list);
                    state = calc.state;
                    _19 = calc.result;
                  } else {
                    _19 = constants.EMPTY_ARRAY;
                  }
                  var oldScope = scope;
                  var _21 = [];
                  for (var _22 = 0 ; _22 < _19.length ; _22++) {
                     ( function () {
                            var scope = _.assign({
                            },oldScope,{
                              task : _19[_22]
                            });
                            var _20 = React.createElement(Component.TaskItem,{
                              task : scope.task
                            });
                            _21.push(_.assign({
                            },_20,{
                              key : scope.task
                            }));
                        } ) ();
                  }
                  var _18 = React.createElement(Component.Nested,{
                  },_21);
                  var _32 ;
                  var _23 ;
                  if(scope.list != null) {
                    var calc = calculateTaskList_rootDistance(state,scope.list);
                    state = calc.state;
                    _23 = calc.result;
                  } else {
                    _23 = null;
                  }
                  var _24 = _23 !== null ? _23 <= 3 : null;
                  if(_24) {
                    var _26 = React.createElement("button",{
                      onClick : scope["addList"]()
                    },"Add child");
                    var _28 = getTaskList_children(state,scope.list);
                    var oldScope = scope;
                    var _30 = [];
                    for (var _31 = 0 ; _31 < _28.length ; _31++) {
                       ( function () {
                              var scope = _.assign({
                              },oldScope,{
                                child : _28[_31]
                              });
                              var _29 = React.createElement(Component.TaskList,{
                                list : scope.child
                              });
                              _30.push(_.assign({
                              },_29,{
                                key : scope.child
                              }));
                          } ) ();
                    }
                    var _25 = React.createElement(Component.Nested,{
                    },_26,_30);
                    _32 = _25;
                  } else {
                    _32 = null;
                  }
                  var _0 = React.createElement("div",{
                  },_2,_4,_11,_17,_18,_32);
                  return {
                    result : _0,
                    state : state
                  };
              },["toggleChildren","deleteList","addList","addTaskHere","setAsRoot"]),
          Checkbox : Lifted(function Checkbox(props,state) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _0 = React.createElement("input",{
                    type : "checkbox",
                    checked : scope.checked,
                    onChange : scope["onChange"]()
                  });
                  return {
                    result : _0,
                    state : state
                  };
              },[]),
          Nested : Lifted(function Nested(props,state) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _0 = React.createElement("div",{
                    style : {
                      marginLeft : "10px"
                    }
                  },scope.children);
                  return {
                    result : _0,
                    state : state
                  };
              },[]),
          TaskFilters : Lifted(function TaskFilters(props,state) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _2 = React.createElement(Component.FilterType,{
                    name : "All",
                    app : scope.app
                  });
                  var _3 = React.createElement(Component.FilterType,{
                    name : "Completed",
                    app : scope.app
                  });
                  var _4 = React.createElement(Component.FilterType,{
                    name : "Not Completed",
                    app : scope.app
                  });
                  var _0 = React.createElement("ul",{
                  },_2,_3,_4);
                  return {
                    result : _0,
                    state : state
                  };
              },[]),
          FilterType : Lifted(function FilterType(props,state) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _7 ;
                  var _5 ;
                  if(scope.app != null) {
                    var calc = calculateTaskApp_filter(state,scope.app);
                    state = calc.state;
                    _5 = calc.result;
                  } else {
                    _5 = null;
                  }
                  var _6 = _5 !== null && scope.name !== null ? _5 === scope.name : null;
                  if(_6) {
                    _7 = "#ddd";
                  } else {
                    _7 = "";
                  }
                  var _2 = React.createElement("a",{
                    style : {
                      backgroundColor : _7
                    },
                    onClick : scope["setFilter"]()
                  },scope.name);
                  var _0 = React.createElement("li",{
                  },_2);
                  return {
                    result : _0,
                    state : state
                  };
              },["setFilter"]),
          TaskItem : Lifted(function TaskItem(props,state) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _3 ;
                  if(scope.task != null) {
                    var calc = calculateTask_finished(state,scope.task);
                    state = calc.state;
                    _3 = calc.result;
                  } else {
                    _3 = null;
                  }
                  var _2 = React.createElement(Component.Checkbox,{
                    checked : _3,
                    onChange : scope.toggleFinished
                  });
                  var _10 ;
                  var _4 ;
                  if(scope.task != null) {
                    var calc = calculateTask_beingEdited(state,scope.task);
                    state = calc.state;
                    _4 = calc.result;
                  } else {
                    _4 = null;
                  }
                  if(_4) {
                    var _6 = getTask_description(state,scope.task);
                    var _5 = React.createElement(imports["pixiedust/components/native/inputs"].StringInput,{
                      value$identity :  ( function () {
                              return scope.task;
                          } ) (),
                      value$setter : actionCreators["setTask_description"],
                      value : _6,
                      onSubmit : scope.finishEditing
                    });
                    _10 = _5;
                  } else {
                    var _9 = getTask_description(state,scope.task);
                    var _7 = React.createElement("span",{
                      onDoubleClick : scope["setEditing"](scope.task),
                      onBlur : scope["setEditing"](null)
                    },_9);
                    _10 = _7;
                  }
                  var _0 = React.createElement("div",{
                  },_2,_10);
                  return {
                    result : _0,
                    state : state
                  };
              },["toggleFinished","setEditing","finishEditing"]),
          TaskApp : Lifted(function TaskApp(props,state) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _2 = getTaskApp_rootList(state,scope.app);
                  var _3 ;
                  if(_2 != null) {
                    var calc = calculateTaskList_rootList(state,_2);
                    state = calc.state;
                    _3 = calc.result;
                  } else {
                    _3 = null;
                  }
                  var _0 = React.createElement("button",{
                    onClick : scope["setRoot"](_3)
                  },"Root");
                  var _2 = getTaskApp_rootList(state,scope.app);
                  var _3 = getTaskList_parent(state,_2);
                  var oldScope = scope;
                  var _8 ;
                  if(_3 !== null) {
                     ( function () {
                            var scope = _.assign({
                            },oldScope,{
                              parent : _3
                            });
                            var _6 = React.createElement("button",{
                              onClick : scope["setRoot"](scope.parent)
                            },"Parent");
                            var _4 = React.createElement("div",{
                            },_6);
                            _8 = _4;
                        } ) ();
                  } else {
                    _8 = null;
                  }
                  var _10 ;
                  if(scope.app != null) {
                    var calc = calculateTaskApp_input(state,scope.app);
                    state = calc.state;
                    _10 = calc.result;
                  } else {
                    _10 = null;
                  }
                  var _13 ;
                  var _11 ;
                  if(scope.app != null) {
                    var calc = calculateTaskApp_input(state,scope.app);
                    state = calc.state;
                    _11 = calc.result;
                  } else {
                    _11 = null;
                  }
                  var _12 = _11 !== null ? _11 !== "" : null;
                  if(_12) {
                    _13 = scope.addTask;
                  } else {
                    _13 = null;
                  }
                  var _9 = React.createElement(imports["pixiedust/components/native/inputs"].StringInput,{
                    value$identity :  ( function () {
                            return scope.app;
                        } ) (),
                    value$setter : actionCreators["setTaskApp_input"],
                    value : _10,
                    onSubmit : _13
                  });
                  var _16 ;
                  if(scope.app != null) {
                    var calc = calculateTaskApp_remainder(state,scope.app);
                    state = calc.state;
                    _16 = calc.result;
                  } else {
                    _16 = null;
                  }
                  var _17 =  ( _16 == null ? constants.EMPTY_ARRAY : [_16] ) .concat(" " == null ? constants.EMPTY_ARRAY : [" "]);
                  var _18 = _17.join('');
                  var _19 = _18 !== null ? "" + _18 : null;
                  var _22 ;
                  var _20 ;
                  if(scope.app != null) {
                    var calc = calculateTaskApp_remainder(state,scope.app);
                    state = calc.state;
                    _20 = calc.result;
                  } else {
                    _20 = null;
                  }
                  var _21 = _20 !== null ? _20 === 1 : null;
                  if(_21) {
                    _22 = "task";
                  } else {
                    _22 = "tasks";
                  }
                  var _23 =  ( _22 == null ? constants.EMPTY_ARRAY : [_22] ) .concat("  left" == null ? constants.EMPTY_ARRAY : ["  left"]);
                  var _24 = _23.join('');
                  var _25 = _19 !== null && _24 !== null ? _19 + _24 : null;
                  var _14 = React.createElement("span",{
                  },_25);
                  var _27 = getTaskApp_rootList(state,scope.app);
                  var _26 = React.createElement(Component.TaskList,{
                    list : _27
                  });
                  var _28 = React.createElement(Component.TaskFilters,{
                    app : scope.app
                  });
                  return {
                    result : React.createElement('group',{
                    },_0,_8,_9,_14,_26,_28),
                    state : state
                  };
              },["setRoot","addTask"])
        };
    } ) ();
module.exports.Component = Component;
function TaskList_toggleChildren(state,action) {
  var newState = state;
  scoped(scope,_.assign({
  },action.props,{
  }),function (scope) {
          var _0 ;
          if(scope.list != null) {
            var calc = calculateTaskList_allTasks(state,scope.list);
            state = calc.state;
            _0 = calc.result;
          } else {
            _0 = constants.EMPTY_ARRAY;
          }
          for (var _1 = 0 ; _1 < _0.length ; _1++) {
            scoped(scope,{
              $this : _0[_1]
            },function (scope) {
                    var _3 ;
                    if(scope.list != null) {
                      var calc = calculateTaskList_allFinished(state,scope.list);
                      state = calc.state;
                      _3 = calc.result;
                    } else {
                      _3 = null;
                    }
                    var _4 = !_3;
                    newState = setTask_finished(newState,scope["$this"],_4);
                });
          }
      });
  return newState;
}

actions["TaskList_toggleChildren"] = TaskList_toggleChildren;
function TaskList_deleteList(state,action) {
  var newState = state;
  scoped(scope,_.assign({
  },action.props,{
  }),function (scope) {
          scoped(scope,{
            $this : scope.list
          },function (scope) {
                  newState = setTaskList_parent(newState,scope["$this"],null);
              });
      });
  return newState;
}

actions["TaskList_deleteList"] = TaskList_deleteList;
function TaskList_addList(state,action) {
  var newState = state;
  scoped(scope,_.assign({
  },action.props,{
  }),function (scope) {
          var _0 = {
            id : pixiedustRuntime.generateUniqueId()
          };
          newState = newState.update("TaskList",function (table) {
                  return table.set(_0.id,_0);
              });
          scoped(scope,{
            $this : _0.id
          },function (scope) {
                  var _2 = getTaskList_app(state,scope.list);
                  newState = setTaskList_app(newState,scope["$this"],_2);
                  newState = setTaskList_parent(newState,scope["$this"],scope.list);
              });
          scoped(scope,{
            l : _0.id
          },function (scope) {
              });
      });
  return newState;
}

actions["TaskList_addList"] = TaskList_addList;
function TaskList_addTaskHere(state,action) {
  var newState = state;
  scoped(scope,_.assign({
  },action.props,{
  }),function (scope) {
          var _0 = {
            id : pixiedustRuntime.generateUniqueId()
          };
          newState = newState.update("Task",function (table) {
                  return table.set(_0.id,_0);
              });
          scoped(scope,{
            $this : _0.id
          },function (scope) {
                  var _2 = getTaskList_app(state,scope.list);
                  var _3 ;
                  if(_2 != null) {
                    var calc = calculateTaskApp_input(state,_2);
                    state = calc.state;
                    _3 = calc.result;
                  } else {
                    _3 = null;
                  }
                  newState = setTask_description(newState,scope["$this"],_3);
                  newState = setTask_list(newState,scope["$this"],scope.list);
              });
          scoped(scope,{
            task : _0.id
          },function (scope) {
              });
      });
  return newState;
}

actions["TaskList_addTaskHere"] = TaskList_addTaskHere;
function TaskList_setAsRoot(state,action) {
  var newState = state;
  scoped(scope,_.assign({
  },action.props,{
  }),function (scope) {
          var _0 = getTaskList_app(state,scope.list);
          scoped(scope,{
            $this : _0
          },function (scope) {
                  newState = setTaskApp_rootList(newState,scope["$this"],scope.list);
              });
      });
  return newState;
}

actions["TaskList_setAsRoot"] = TaskList_setAsRoot;
function FilterType_setFilter(state,action) {
  var newState = state;
  scoped(scope,_.assign({
  },action.props,{
  }),function (scope) {
          scoped(scope,{
            $this : scope.app
          },function (scope) {
                  newState = setTaskApp_filter(newState,scope["$this"],scope.name);
              });
      });
  return newState;
}

actions["FilterType_setFilter"] = FilterType_setFilter;
function TaskItem_toggleFinished(state,action) {
  var newState = state;
  scoped(scope,_.assign({
  },action.props,{
  }),function (scope) {
          scoped(scope,{
            $this : scope.task
          },function (scope) {
                  var _1 ;
                  if(scope["$this"] != null) {
                    var calc = calculateTask_finished(state,scope["$this"]);
                    state = calc.state;
                    _1 = calc.result;
                  } else {
                    _1 = null;
                  }
                  var _2 = !_1;
                  newState = setTask_finished(newState,scope["$this"],_2);
              });
      });
  return newState;
}

actions["TaskItem_toggleFinished"] = TaskItem_toggleFinished;
function TaskItem_setEditing(state,action) {
  var newState = state;
  scoped(scope,_.assign({
  },action.props,{
    task : action.args[0]
  }),function (scope) {
          var _0 = getTask_list(state,scope.task);
          var _1 = getTaskList_app(state,_0);
          scoped(scope,{
            $this : _1
          },function (scope) {
                  newState = setTaskApp_editing(newState,scope["$this"],scope.task);
              });
      });
  return newState;
}

actions["TaskItem_setEditing"] = TaskItem_setEditing;
function TaskItem_finishEditing(state,action) {
  var newState = state;
  scoped(scope,_.assign({
  },action.props,{
    description : action.args[0]
  }),function (scope) {
          var _0 = getTask_list(state,scope.task);
          var _1 = getTaskList_app(state,_0);
          scoped(scope,{
            $this : _1
          },function (scope) {
                  newState = setTaskApp_editing(newState,scope["$this"],null);
              });
      });
  return newState;
}

actions["TaskItem_finishEditing"] = TaskItem_finishEditing;
function TaskApp_setRoot(state,action) {
  var newState = state;
  scoped(scope,_.assign({
  },action.props,{
    list : action.args[0]
  }),function (scope) {
          scoped(scope,{
            $this : scope.app
          },function (scope) {
                  newState = setTaskApp_rootList(newState,scope["$this"],scope.list);
              });
      });
  return newState;
}

actions["TaskApp_setRoot"] = TaskApp_setRoot;
function TaskApp_addTask(state,action) {
  var newState = state;
  scoped(scope,_.assign({
  },action.props,{
    description : action.args[0]
  }),function (scope) {
          var _2 = {
            id : pixiedustRuntime.generateUniqueId()
          };
          newState = newState.update("Task",function (table) {
                  return table.set(_2.id,_2);
              });
          scoped(scope,{
            $this : _2.id
          },function (scope) {
                  var _4 = getTaskApp_rootList(state,scope.app);
                  newState = setTask_list(newState,scope["$this"],_4);
                  newState = setTask_description(newState,scope["$this"],scope.description);
              });
          scoped(scope,{
            task : _2.id
          },function (scope) {
                  scoped(scope,{
                    $this : scope.app
                  },function (scope) {
                          newState = setTaskApp_input(newState,scope["$this"],"");
                      });
              });
      });
  return newState;
}

actions["TaskApp_addTask"] = TaskApp_addTask;