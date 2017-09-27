var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Lifted = require('pixiedust/components/Lifted');
var pixiedustRuntime = require('pixiedust/runtime');
var imports = {
  "../../components/Select" : require("../../components/Select"),
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
  "App" : immutable.Map(),
  "Course" : immutable.Map(),
  "Student" : immutable.Map(),
  "Submission" : immutable.Map(),
  "App_view" : immutable.Map(),
  "App_courses" : immutable.Map(),
  "App_selectedCourse" : immutable.Map(),
  "Course_avgGrade" : immutable.Map(),
  "Course_view" : immutable.Map(),
  "Course_app" : immutable.Map(),
  "Course_inverseSelectedCourse" : immutable.Map(),
  "Course_submissions" : immutable.Map(),
  "Student_submissions" : immutable.Map(),
  "Submission_grade2" : immutable.Map(),
  "Submission_pass" : immutable.Map(),
  "Submission_view" : immutable.Map(),
  "Submission_course" : immutable.Map(),
  "Submission_student" : immutable.Map()
});
module.exports.emptyState = emptyState;
function getApp_view(state,id) {
  return state.get("App_view").get(id);
}

module.exports.getApp_view = getApp_view;
function getApp_view_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("App_view");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _2.get(ids[_3]);
    if(_4 !== undefined) {
      _0.push(_4);
    }
  }
  return _0;
}

module.exports.getApp_view_Many = getApp_view_Many;
function getApp_courses(state,id) {
  var _0 = state.get("App_courses").get(id);
  if(_0 === undefined) {
    _0 = constants.EMPTY_ARRAY;
  }
  return _0;
}

module.exports.getApp_courses = getApp_courses;
function getApp_courses_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("App_courses");
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

module.exports.getApp_courses_Many = getApp_courses_Many;
function getApp_selectedCourse(state,id) {
  var _0 = state.get("App_selectedCourse").get(id);
  if(_0 === undefined) {
    _0 = null;
  }
  return _0;
}

module.exports.getApp_selectedCourse = getApp_selectedCourse;
function getApp_selectedCourse_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("App_selectedCourse");
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

module.exports.getApp_selectedCourse_Many = getApp_selectedCourse_Many;
function getCourse_avgGrade(state,id) {
  return state.get("Course_avgGrade").get(id);
}

module.exports.getCourse_avgGrade = getCourse_avgGrade;
function getCourse_avgGrade_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Course_avgGrade");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _2.get(ids[_3]);
    if(_4 !== undefined) {
      _0.push(_4);
    }
  }
  return _0;
}

module.exports.getCourse_avgGrade_Many = getCourse_avgGrade_Many;
function getCourse_name(state,id) {
  var _0 = state.get("Course").get(id);
  if(_0 !== undefined) {
    _0 = _0.name;
    if(_0 === undefined) {
      _0 = null;
    }
  }
  return _0;
}

module.exports.getCourse_name = getCourse_name;
function getCourse_name_Many(state,ids) {
  var _0 = [];
  var _1 = state.get("Course");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _1.get(ids[_3]);
    if(_4 !== undefined) {
      _4 = _4.name;
      if(_4 !== undefined && _4 !== null) {
        if(_4 !== undefined) {
          _0.push(_4);
        }
      }
    }
  }
  return _0;
}

module.exports.getCourse_name_Many = getCourse_name_Many;
function getCourse_view(state,id) {
  return state.get("Course_view").get(id);
}

module.exports.getCourse_view = getCourse_view;
function getCourse_view_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Course_view");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _2.get(ids[_3]);
    if(_4 !== undefined) {
      _0.push(_4);
    }
  }
  return _0;
}

module.exports.getCourse_view_Many = getCourse_view_Many;
function getCourse_app(state,id) {
  var _0 = state.get("Course_app").get(id);
  if(_0 === undefined) {
    _0 = null;
  }
  return _0;
}

module.exports.getCourse_app = getCourse_app;
function getCourse_app_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Course_app");
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

module.exports.getCourse_app_Many = getCourse_app_Many;
function getCourse_inverseSelectedCourse(state,id) {
  var _0 = state.get("Course_inverseSelectedCourse").get(id);
  if(_0 === undefined) {
    _0 = null;
  }
  return _0;
}

module.exports.getCourse_inverseSelectedCourse = getCourse_inverseSelectedCourse;
function getCourse_inverseSelectedCourse_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Course_inverseSelectedCourse");
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

module.exports.getCourse_inverseSelectedCourse_Many = getCourse_inverseSelectedCourse_Many;
function getCourse_submissions(state,id) {
  var _0 = state.get("Course_submissions").get(id);
  if(_0 === undefined) {
    _0 = constants.EMPTY_ARRAY;
  }
  return _0;
}

module.exports.getCourse_submissions = getCourse_submissions;
function getCourse_submissions_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Course_submissions");
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

module.exports.getCourse_submissions_Many = getCourse_submissions_Many;
function getStudent_name(state,id) {
  var _0 = state.get("Student").get(id);
  if(_0 !== undefined) {
    _0 = _0.name;
    if(_0 === undefined) {
      _0 = null;
    }
  }
  return _0;
}

module.exports.getStudent_name = getStudent_name;
function getStudent_name_Many(state,ids) {
  var _0 = [];
  var _1 = state.get("Student");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _1.get(ids[_3]);
    if(_4 !== undefined) {
      _4 = _4.name;
      if(_4 !== undefined && _4 !== null) {
        if(_4 !== undefined) {
          _0.push(_4);
        }
      }
    }
  }
  return _0;
}

module.exports.getStudent_name_Many = getStudent_name_Many;
function getStudent_submissions(state,id) {
  var _0 = state.get("Student_submissions").get(id);
  if(_0 === undefined) {
    _0 = constants.EMPTY_ARRAY;
  }
  return _0;
}

module.exports.getStudent_submissions = getStudent_submissions;
function getStudent_submissions_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Student_submissions");
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

module.exports.getStudent_submissions_Many = getStudent_submissions_Many;
function getSubmission_grade(state,id) {
  var _0 = state.get("Submission").get(id);
  if(_0 !== undefined) {
    _0 = _0.grade;
    if(_0 === undefined) {
      _0 = null;
    }
  }
  return _0;
}

module.exports.getSubmission_grade = getSubmission_grade;
function getSubmission_grade_Many(state,ids) {
  var _0 = [];
  var _1 = state.get("Submission");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _1.get(ids[_3]);
    if(_4 !== undefined) {
      _4 = _4.grade;
      if(_4 !== undefined && _4 !== null) {
        if(_4 !== undefined) {
          _0.push(_4);
        }
      }
    }
  }
  return _0;
}

module.exports.getSubmission_grade_Many = getSubmission_grade_Many;
function getSubmission_grade2(state,id) {
  return state.get("Submission_grade2").get(id);
}

module.exports.getSubmission_grade2 = getSubmission_grade2;
function getSubmission_grade2_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Submission_grade2");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _2.get(ids[_3]);
    if(_4 !== undefined) {
      _0.push(_4);
    }
  }
  return _0;
}

module.exports.getSubmission_grade2_Many = getSubmission_grade2_Many;
function getSubmission_pass(state,id) {
  return state.get("Submission_pass").get(id);
}

module.exports.getSubmission_pass = getSubmission_pass;
function getSubmission_pass_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Submission_pass");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _2.get(ids[_3]);
    if(_4 !== undefined) {
      _0.push(_4);
    }
  }
  return _0;
}

module.exports.getSubmission_pass_Many = getSubmission_pass_Many;
function getSubmission_view(state,id) {
  return state.get("Submission_view").get(id);
}

module.exports.getSubmission_view = getSubmission_view;
function getSubmission_view_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Submission_view");
  for (var _3 = 0 ; _3 < ids.length ; _3++) {
    _4 = _2.get(ids[_3]);
    if(_4 !== undefined) {
      _0.push(_4);
    }
  }
  return _0;
}

module.exports.getSubmission_view_Many = getSubmission_view_Many;
function getSubmission_course(state,id) {
  var _0 = state.get("Submission_course").get(id);
  if(_0 === undefined) {
    _0 = null;
  }
  return _0;
}

module.exports.getSubmission_course = getSubmission_course;
function getSubmission_course_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Submission_course");
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

module.exports.getSubmission_course_Many = getSubmission_course_Many;
function getSubmission_student(state,id) {
  var _0 = state.get("Submission_student").get(id);
  if(_0 === undefined) {
    _0 = null;
  }
  return _0;
}

module.exports.getSubmission_student = getSubmission_student;
function getSubmission_student_Many(state,ids) {
  var _0 = [];
  var _2 = state.get("Submission_student");
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

module.exports.getSubmission_student_Many = getSubmission_student_Many;
function setApp_courses(state,id,value) {
  state = invalidateApp_courses(state,id);
  var previousValue = getApp_courses(state,id);
  var table = state.get("App_courses").set(id,value);
  state = state.set("App_courses",table);
  var inverseTable = state.get("Course_app");
  var added = _.difference(value,previousValue);
  var removed = _.difference(previousValue,value);
  for (var i = 0 ; i < added.length ; i++) {
    var addedId = added[i];
    state = invalidateCourse_app(state,addedId);
    inverseTable = inverseTable.set(addedId,id);
  }
  for (var i = 0 ; i < removed.length ; i++) {
    var removedId = removed[i];
    state = invalidateCourse_app(state,removedId);
    inverseTable = inverseTable.remove(removedId);
  }
  state = state.set("Course_app",inverseTable);
  return state;
}

module.exports.setApp_courses = setApp_courses;
function setApp_selectedCourse(state,id,value) {
  state = invalidateApp_selectedCourse(state,id);
  var previousValue = getApp_selectedCourse(state,id);
  var table = state.get("App_selectedCourse").set(id,value);
  state = state.set("App_selectedCourse",table);
  var inverseTable = state.get("Course_inverseSelectedCourse");
  if(value != null) {
    var addedId = value;
    state = invalidateCourse_inverseSelectedCourse(state,addedId);
    inverseTable = inverseTable.set(addedId,id);
  }
  if(previousValue != null) {
    var removedId = previousValue;
    state = invalidateCourse_inverseSelectedCourse(state,removedId);
    inverseTable = inverseTable.remove(removedId);
  }
  state = state.set("Course_inverseSelectedCourse",inverseTable);
  return state;
}

module.exports.setApp_selectedCourse = setApp_selectedCourse;
function setCourse_name(state,id,value) {
  state = invalidateCourse_name(state,id);
  var prop = {
    name : value
  };
  state = state.update("Course",function (table) {
          return table.update(id,function (e) {
                  return _.assign({
                  },e,prop);
              });
      });
  return state;
}

module.exports.setCourse_name = setCourse_name;
function setCourse_app(state,id,value) {
  state = invalidateCourse_app(state,id);
  var previousValue = getCourse_app(state,id);
  var table = state.get("Course_app").set(id,value);
  state = state.set("Course_app",table);
  var inverseTable = state.get("App_courses");
  if(value != null) {
    var addedId = value;
    state = invalidateApp_courses(state,addedId);
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
    state = invalidateApp_courses(state,removedId);
    var inverseIds = inverseTable.get(removedId);
    if(inverseIds === undefined) {
      inverseIds = [];
    } else {
      inverseIds = _.without(inverseIds,id);
    }
    inverseTable = inverseTable.set(removedId,inverseIds);
  }
  state = state.set("App_courses",inverseTable);
  return state;
}

module.exports.setCourse_app = setCourse_app;
function setCourse_inverseSelectedCourse(state,id,value) {
  state = invalidateCourse_inverseSelectedCourse(state,id);
  var previousValue = getCourse_inverseSelectedCourse(state,id);
  var table = state.get("Course_inverseSelectedCourse").set(id,value);
  state = state.set("Course_inverseSelectedCourse",table);
  var inverseTable = state.get("App_selectedCourse");
  if(value != null) {
    var addedId = value;
    state = invalidateApp_selectedCourse(state,addedId);
    inverseTable = inverseTable.set(addedId,id);
  }
  if(previousValue != null) {
    var removedId = previousValue;
    state = invalidateApp_selectedCourse(state,removedId);
    inverseTable = inverseTable.remove(removedId);
  }
  state = state.set("App_selectedCourse",inverseTable);
  return state;
}

module.exports.setCourse_inverseSelectedCourse = setCourse_inverseSelectedCourse;
function setCourse_submissions(state,id,value) {
  state = invalidateCourse_submissions(state,id);
  var previousValue = getCourse_submissions(state,id);
  var table = state.get("Course_submissions").set(id,value);
  state = state.set("Course_submissions",table);
  var inverseTable = state.get("Submission_course");
  var added = _.difference(value,previousValue);
  var removed = _.difference(previousValue,value);
  for (var i = 0 ; i < added.length ; i++) {
    var addedId = added[i];
    state = invalidateSubmission_course(state,addedId);
    inverseTable = inverseTable.set(addedId,id);
  }
  for (var i = 0 ; i < removed.length ; i++) {
    var removedId = removed[i];
    state = invalidateSubmission_course(state,removedId);
    inverseTable = inverseTable.remove(removedId);
  }
  state = state.set("Submission_course",inverseTable);
  return state;
}

module.exports.setCourse_submissions = setCourse_submissions;
function setStudent_name(state,id,value) {
  state = invalidateStudent_name(state,id);
  var prop = {
    name : value
  };
  state = state.update("Student",function (table) {
          return table.update(id,function (e) {
                  return _.assign({
                  },e,prop);
              });
      });
  return state;
}

module.exports.setStudent_name = setStudent_name;
function setStudent_submissions(state,id,value) {
  state = invalidateStudent_submissions(state,id);
  var previousValue = getStudent_submissions(state,id);
  var table = state.get("Student_submissions").set(id,value);
  state = state.set("Student_submissions",table);
  var inverseTable = state.get("Submission_student");
  var added = _.difference(value,previousValue);
  var removed = _.difference(previousValue,value);
  for (var i = 0 ; i < added.length ; i++) {
    var addedId = added[i];
    state = invalidateSubmission_student(state,addedId);
    inverseTable = inverseTable.set(addedId,id);
  }
  for (var i = 0 ; i < removed.length ; i++) {
    var removedId = removed[i];
    state = invalidateSubmission_student(state,removedId);
    inverseTable = inverseTable.remove(removedId);
  }
  state = state.set("Submission_student",inverseTable);
  return state;
}

module.exports.setStudent_submissions = setStudent_submissions;
function setSubmission_grade(state,id,value) {
  state = invalidateSubmission_grade(state,id);
  var prop = {
    grade : value
  };
  state = state.update("Submission",function (table) {
          return table.update(id,function (e) {
                  return _.assign({
                  },e,prop);
              });
      });
  return state;
}

module.exports.setSubmission_grade = setSubmission_grade;
function setSubmission_course(state,id,value) {
  state = invalidateSubmission_course(state,id);
  var previousValue = getSubmission_course(state,id);
  var table = state.get("Submission_course").set(id,value);
  state = state.set("Submission_course",table);
  var inverseTable = state.get("Course_submissions");
  if(value != null) {
    var addedId = value;
    state = invalidateCourse_submissions(state,addedId);
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
    state = invalidateCourse_submissions(state,removedId);
    var inverseIds = inverseTable.get(removedId);
    if(inverseIds === undefined) {
      inverseIds = [];
    } else {
      inverseIds = _.without(inverseIds,id);
    }
    inverseTable = inverseTable.set(removedId,inverseIds);
  }
  state = state.set("Course_submissions",inverseTable);
  return state;
}

module.exports.setSubmission_course = setSubmission_course;
function setSubmission_student(state,id,value) {
  state = invalidateSubmission_student(state,id);
  var previousValue = getSubmission_student(state,id);
  var table = state.get("Submission_student").set(id,value);
  state = state.set("Submission_student",table);
  var inverseTable = state.get("Student_submissions");
  if(value != null) {
    var addedId = value;
    state = invalidateStudent_submissions(state,addedId);
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
    state = invalidateStudent_submissions(state,removedId);
    var inverseIds = inverseTable.get(removedId);
    if(inverseIds === undefined) {
      inverseIds = [];
    } else {
      inverseIds = _.without(inverseIds,id);
    }
    inverseTable = inverseTable.set(removedId,inverseIds);
  }
  state = state.set("Student_submissions",inverseTable);
  return state;
}

module.exports.setSubmission_student = setSubmission_student;
function addApp_courses(state,id,value) {
  var previousValue = getApp_courses(state,id);
  var nextValue = previousValue.concat(value);
  return setApp_courses(state,id,nextValue);
}

module.exports.addApp_courses = addApp_courses;
function addCourse_submissions(state,id,value) {
  var previousValue = getCourse_submissions(state,id);
  var nextValue = previousValue.concat(value);
  return setCourse_submissions(state,id,nextValue);
}

module.exports.addCourse_submissions = addCourse_submissions;
function addStudent_submissions(state,id,value) {
  var previousValue = getStudent_submissions(state,id);
  var nextValue = previousValue.concat(value);
  return setStudent_submissions(state,id,nextValue);
}

module.exports.addStudent_submissions = addStudent_submissions;
function invalidateApp_view(state,id) {
  state = state.update("App_view",function (set) {
          return set.remove(id);
      });
  return state;
}

module.exports.invalidateApp_view = invalidateApp_view;
function invalidateApp_courses(state,id) {
  if(id != null) {
    state = invalidateApp_view(state,id);
  }
  return state;
}

module.exports.invalidateApp_courses = invalidateApp_courses;
function invalidateApp_selectedCourse(state,id) {
  if(id != null) {
    state = invalidateApp_view(state,id);
  }
  return state;
}

module.exports.invalidateApp_selectedCourse = invalidateApp_selectedCourse;
function invalidateCourse_avgGrade(state,id) {
  state = state.update("Course_avgGrade",function (set) {
          return set.remove(id);
      });
  if(id != null) {
    state = invalidateCourse_view(state,id);
  }
  return state;
}

module.exports.invalidateCourse_avgGrade = invalidateCourse_avgGrade;
function invalidateCourse_name(state,id) {
  scoped(scope,{
    $this : id
  },function (scope) {
          var _0 = getCourse_app(state,scope["$this"]);
          if(_0 != null) {
            state = invalidateApp_view(state,_0);
          }
      });
  if(id != null) {
    state = invalidateCourse_view(state,id);
  }
  return state;
}

module.exports.invalidateCourse_name = invalidateCourse_name;
function invalidateCourse_view(state,id) {
  state = state.update("Course_view",function (set) {
          return set.remove(id);
      });
  scoped(scope,{
    $this : id
  },function (scope) {
          var _0 = getCourse_inverseSelectedCourse(state,scope["$this"]);
          if(_0 != null) {
            state = invalidateApp_view(state,_0);
          }
      });
  return state;
}

module.exports.invalidateCourse_view = invalidateCourse_view;
function invalidateCourse_app(state,id) {
  return state;
}

module.exports.invalidateCourse_app = invalidateCourse_app;
function invalidateCourse_inverseSelectedCourse(state,id) {
  return state;
}

module.exports.invalidateCourse_inverseSelectedCourse = invalidateCourse_inverseSelectedCourse;
function invalidateCourse_submissions(state,id) {
  if(id != null) {
    state = invalidateCourse_avgGrade(state,id);
  }
  if(id != null) {
    state = invalidateCourse_view(state,id);
  }
  return state;
}

module.exports.invalidateCourse_submissions = invalidateCourse_submissions;
function invalidateStudent_name(state,id) {
  scoped(scope,{
    $this : id
  },function (scope) {
          var _0 = getStudent_submissions(state,scope["$this"]);
          if(_0 != null) {
            for (var i = 0 ; i < _0.length ; i++) {
              state = invalidateSubmission_view(state,_0[i]);
            }
          }
      });
  return state;
}

module.exports.invalidateStudent_name = invalidateStudent_name;
function invalidateStudent_submissions(state,id) {
  return state;
}

module.exports.invalidateStudent_submissions = invalidateStudent_submissions;
function invalidateSubmission_grade(state,id) {
  if(id != null) {
    state = invalidateSubmission_grade2(state,id);
  }
  if(id != null) {
    state = invalidateSubmission_pass(state,id);
  }
  if(id != null) {
    state = invalidateSubmission_view(state,id);
  }
  return state;
}

module.exports.invalidateSubmission_grade = invalidateSubmission_grade;
function invalidateSubmission_grade2(state,id) {
  state = state.update("Submission_grade2",function (set) {
          return set.remove(id);
      });
  scoped(scope,{
    $this : id
  },function (scope) {
          var _0 = getSubmission_course(state,scope["$this"]);
          if(_0 != null) {
            state = invalidateCourse_avgGrade(state,_0);
          }
      });
  return state;
}

module.exports.invalidateSubmission_grade2 = invalidateSubmission_grade2;
function invalidateSubmission_pass(state,id) {
  state = state.update("Submission_pass",function (set) {
          return set.remove(id);
      });
  if(id != null) {
    state = invalidateSubmission_grade2(state,id);
  }
  return state;
}

module.exports.invalidateSubmission_pass = invalidateSubmission_pass;
function invalidateSubmission_view(state,id) {
  state = state.update("Submission_view",function (set) {
          return set.remove(id);
      });
  scoped(scope,{
    $this : id
  },function (scope) {
          var _0 = getSubmission_course(state,scope["$this"]);
          if(_0 != null) {
            state = invalidateCourse_view(state,_0);
          }
      });
  return state;
}

module.exports.invalidateSubmission_view = invalidateSubmission_view;
function invalidateSubmission_course(state,id) {
  return state;
}

module.exports.invalidateSubmission_course = invalidateSubmission_course;
function invalidateSubmission_student(state,id) {
  if(id != null) {
    state = invalidateSubmission_view(state,id);
  }
  return state;
}

module.exports.invalidateSubmission_student = invalidateSubmission_student;
function calculateApp_view(state,id) {
  var result = getApp_view(state,id);
  if(result === undefined) {
    scoped(scope,{
      $this : id
    },function (scope) {
            var _4 = getApp_courses(state,scope["$this"]);
            var _5 = getCourse_name_Many(state,_4);
            var _6 = getApp_courses(state,scope["$this"]);
            var _7 = getApp_selectedCourse(state,scope["$this"]);
            var _3 = React.createElement(imports["../../components/Select"].Select,{
              labels : _5,
              choice : _6,
              selection : _7
            });
            var _8 = getApp_selectedCourse(state,scope["$this"]);
            var _9 ;
            if(_8 != null) {
              var calc = calculateCourse_view(state,_8);
              state = calc.state;
              _9 = calc.result;
            } else {
              _9 = null;
            }
            var _1 = React.createElement("div",{
            },_3,_9);
            result = _1;
            state = state.update("App_view",function (table) {
                    return table.set(id,_1);
                });
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateApp_view = calculateApp_view;
function calculateApp_view_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateApp_view(state,id);
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

module.exports.calculateApp_view_Many = calculateApp_view_Many;
function calculateCourse_avgGrade(state,id) {
  var result = getCourse_avgGrade(state,id);
  if(result === undefined) {
    scoped(scope,{
      $this : id
    },function (scope) {
            var _1 = getCourse_submissions(state,scope["$this"]);
            var _2 ;
            if(_1 != constants.EMPTY_ARRAY) {
              var calc = calculateSubmission_grade2_Many(state,_1);
              state = calc.state;
              _2 = calc.result;
            } else {
              _2 = constants.EMPTY_ARRAY;
            }
            var _3 = expression.avg(_2);
            result = _3;
            state = state.update("Course_avgGrade",function (table) {
                    return table.set(id,_3);
                });
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateCourse_avgGrade = calculateCourse_avgGrade;
function calculateCourse_avgGrade_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateCourse_avgGrade(state,id);
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

module.exports.calculateCourse_avgGrade_Many = calculateCourse_avgGrade_Many;
function calculateCourse_view(state,id) {
  var result = getCourse_view(state,id);
  if(result === undefined) {
    scoped(scope,{
      $this : id
    },function (scope) {
            var _5 = getCourse_name(state,scope["$this"]);
            var _3 = React.createElement("h1",{
            },_5);
            var _9 ;
            var _8 ;
            if(scope["$this"] != null) {
              var calc = calculateCourse_avgGrade(state,scope["$this"]);
              state = calc.state;
              _8 = calc.result;
            } else {
              _8 = null;
            }
            if(_8 !== null) {
              _9 = _8;
            } else {
              _9 = "No grades";
            }
            var _6 = React.createElement("h2",{
            },"Average grade: ",_9);
            var _17 = React.createElement("th",{
            },"Student");
            var _19 = React.createElement("th",{
            },"Grade");
            var _15 = React.createElement("tr",{
            },_17,_19);
            var _13 = React.createElement("thead",{
            },_15);
            var _23 = getCourse_submissions(state,scope["$this"]);
            var _24 ;
            if(_23 != constants.EMPTY_ARRAY) {
              var calc = calculateSubmission_view_Many(state,_23);
              state = calc.state;
              _24 = calc.result;
            } else {
              _24 = constants.EMPTY_ARRAY;
            }
            var _21 = React.createElement("tbody",{
            },_24);
            var _11 = React.createElement("table",{
            },_13,_21);
            var _1 = React.createElement("div",{
            },_3,_6,_11);
            result = _1;
            state = state.update("Course_view",function (table) {
                    return table.set(id,_1);
                });
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateCourse_view = calculateCourse_view;
function calculateCourse_view_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateCourse_view(state,id);
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

module.exports.calculateCourse_view_Many = calculateCourse_view_Many;
function calculateSubmission_grade2(state,id) {
  var result = getSubmission_grade2(state,id);
  if(result === undefined) {
    scoped(scope,{
      $this : id
    },function (scope) {
            var _3 ;
            var _1 ;
            if(scope["$this"] != null) {
              var calc = calculateSubmission_pass(state,scope["$this"]);
              state = calc.state;
              _1 = calc.result;
            } else {
              _1 = null;
            }
            if(_1) {
              var _2 = getSubmission_grade(state,scope["$this"]);
              _3 = _2;
            } else {
              _3 = null;
            }
            result = _3;
            state = state.update("Submission_grade2",function (table) {
                    return table.set(id,_3);
                });
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateSubmission_grade2 = calculateSubmission_grade2;
function calculateSubmission_grade2_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateSubmission_grade2(state,id);
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

module.exports.calculateSubmission_grade2_Many = calculateSubmission_grade2_Many;
function calculateSubmission_pass(state,id) {
  var result = getSubmission_pass(state,id);
  if(result === undefined) {
    scoped(scope,{
      $this : id
    },function (scope) {
            var _3 ;
            var _1 = getSubmission_grade(state,scope["$this"]);
            var _2 = _1 !== null ? _1 > 5.5 : null;
            if(_2 !== null) {
              _3 = _2;
            } else {
              _3 = false;
            }
            result = _3;
            state = state.update("Submission_pass",function (table) {
                    return table.set(id,_3);
                });
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateSubmission_pass = calculateSubmission_pass;
function calculateSubmission_pass_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateSubmission_pass(state,id);
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

module.exports.calculateSubmission_pass_Many = calculateSubmission_pass_Many;
function calculateSubmission_view(state,id) {
  var result = getSubmission_view(state,id);
  if(result === undefined) {
    scoped(scope,{
      $this : id
    },function (scope) {
            var _5 = getSubmission_student(state,scope["$this"]);
            var _6 = getStudent_name(state,_5);
            var _3 = React.createElement("td",{
            },_6);
            var _10 = getSubmission_grade(state,scope["$this"]);
            var _9 = React.createElement(imports["pixiedust/components/native/inputs"].OptFloatInput,{
              value : _10
            });
            var _7 = React.createElement("td",{
            },_9);
            var _1 = React.createElement("tr",{
            },_3,_7);
            result = _1;
            state = state.update("Submission_view",function (table) {
                    return table.set(id,_1);
                });
        });
  }
  return {
    state : state,
    result : result
  };
}

module.exports.calculateSubmission_view = calculateSubmission_view;
function calculateSubmission_view_Many(state,ids) {
  var result = [];
  for (var i = 0 ; i < ids.length ; i++) {
    var id = ids[i];
    var calc = calculateSubmission_view(state,id);
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

module.exports.calculateSubmission_view_Many = calculateSubmission_view_Many;
function init(state) {
  var alice = {
    id : "alice"
  };
  state = state.update("Student",function (table) {
          return table.set(alice.id,alice);
      });
  var app = {
    id : "app"
  };
  state = state.update("App",function (table) {
          return table.set(app.id,app);
      });
  var bob = {
    id : "bob"
  };
  state = state.update("Student",function (table) {
          return table.set(bob.id,bob);
      });
  var charlie = {
    id : "charlie"
  };
  state = state.update("Student",function (table) {
          return table.set(charlie.id,charlie);
      });
  var course1 = {
    id : "course1"
  };
  state = state.update("Course",function (table) {
          return table.set(course1.id,course1);
      });
  var course2 = {
    id : "course2"
  };
  state = state.update("Course",function (table) {
          return table.set(course2.id,course2);
      });
  var submission1 = {
    id : "submission1"
  };
  state = state.update("Submission",function (table) {
          return table.set(submission1.id,submission1);
      });
  var submission2 = {
    id : "submission2"
  };
  state = state.update("Submission",function (table) {
          return table.set(submission2.id,submission2);
      });
  var submission3 = {
    id : "submission3"
  };
  state = state.update("Submission",function (table) {
          return table.set(submission3.id,submission3);
      });
  var submission4 = {
    id : "submission4"
  };
  state = state.update("Submission",function (table) {
          return table.set(submission4.id,submission4);
      });
  var submission5 = {
    id : "submission5"
  };
  state = state.update("Submission",function (table) {
          return table.set(submission5.id,submission5);
      });
  state = setStudent_name(state,alice.id,"Alice");
  state = addApp_courses(state,app.id,course1.id);
  state = addApp_courses(state,app.id,course2.id);
  state = setApp_selectedCourse(state,app.id,course1.id);
  state = setStudent_name(state,bob.id,"Bob");
  state = setStudent_name(state,charlie.id,"Charlie");
  state = setCourse_name(state,course1.id,"Math");
  state = addCourse_submissions(state,course1.id,submission1.id);
  state = addCourse_submissions(state,course1.id,submission2.id);
  state = addCourse_submissions(state,course1.id,submission3.id);
  state = setCourse_name(state,course2.id,"History");
  state = addCourse_submissions(state,course2.id,submission4.id);
  state = addCourse_submissions(state,course2.id,submission5.id);
  state = setSubmission_student(state,submission1.id,alice.id);
  state = setSubmission_student(state,submission2.id,bob.id);
  state = setSubmission_student(state,submission3.id,charlie.id);
  state = setSubmission_student(state,submission4.id,alice.id);
  state = setSubmission_student(state,submission5.id,charlie.id);
  return {
    state : state,
    ids : {
      alice : alice.id,
      app : app.id,
      bob : bob.id,
      charlie : charlie.id,
      course1 : course1.id,
      course2 : course2.id,
      submission1 : submission1.id,
      submission2 : submission2.id,
      submission3 : submission3.id,
      submission4 : submission4.id,
      submission5 : submission5.id
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
                    var _0 = React.createElement(Component.App,{
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
                    expression : "@App(app) {\n}",
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
  "setApp_courses" : function (state,action) {
          return setApp_courses(state,action.id,action.value);
      },
  "addApp_courses" : function (state,action) {
          return addApp_courses(state,action.id,action.value);
      },
  "setApp_selectedCourse" : function (state,action) {
          return setApp_selectedCourse(state,action.id,action.value);
      },
  "setCourse_name" : function (state,action) {
          return setCourse_name(state,action.id,action.value);
      },
  "setCourse_app" : function (state,action) {
          return setCourse_app(state,action.id,action.value);
      },
  "setCourse_inverseSelectedCourse" : function (state,action) {
          return setCourse_inverseSelectedCourse(state,action.id,action.value);
      },
  "setCourse_submissions" : function (state,action) {
          return setCourse_submissions(state,action.id,action.value);
      },
  "addCourse_submissions" : function (state,action) {
          return addCourse_submissions(state,action.id,action.value);
      },
  "setStudent_name" : function (state,action) {
          return setStudent_name(state,action.id,action.value);
      },
  "setStudent_submissions" : function (state,action) {
          return setStudent_submissions(state,action.id,action.value);
      },
  "addStudent_submissions" : function (state,action) {
          return addStudent_submissions(state,action.id,action.value);
      },
  "setSubmission_grade" : function (state,action) {
          return setSubmission_grade(state,action.id,action.value);
      },
  "setSubmission_course" : function (state,action) {
          return setSubmission_course(state,action.id,action.value);
      },
  "setSubmission_student" : function (state,action) {
          return setSubmission_student(state,action.id,action.value);
      },
  "calculateApp_view" : function (state,action) {
          return calculateApp_view(state,action.id).state;
      },
  "calculateApp_view_Many" : function (state,action) {
          return calculateApp_view_Many(state,action.ids).state;
      },
  "calculateCourse_avgGrade" : function (state,action) {
          return calculateCourse_avgGrade(state,action.id).state;
      },
  "calculateCourse_avgGrade_Many" : function (state,action) {
          return calculateCourse_avgGrade_Many(state,action.ids).state;
      },
  "calculateCourse_view" : function (state,action) {
          return calculateCourse_view(state,action.id).state;
      },
  "calculateCourse_view_Many" : function (state,action) {
          return calculateCourse_view_Many(state,action.ids).state;
      },
  "calculateSubmission_grade2" : function (state,action) {
          return calculateSubmission_grade2(state,action.id).state;
      },
  "calculateSubmission_grade2_Many" : function (state,action) {
          return calculateSubmission_grade2_Many(state,action.ids).state;
      },
  "calculateSubmission_pass" : function (state,action) {
          return calculateSubmission_pass(state,action.id).state;
      },
  "calculateSubmission_pass_Many" : function (state,action) {
          return calculateSubmission_pass_Many(state,action.ids).state;
      },
  "calculateSubmission_view" : function (state,action) {
          return calculateSubmission_view(state,action.id).state;
      },
  "calculateSubmission_view_Many" : function (state,action) {
          return calculateSubmission_view_Many(state,action.ids).state;
      }
};
module.exports.actions = actions;
var actionCreators = {
  "init" : function () {
          return {
            type : "init"
          };
      },
  "setApp_courses" : function (id,value) {
          return {
            type : "setApp_courses",
            id : id,
            value : value
          };
      },
  "addApp_courses" : function (id,value) {
          return {
            type : "addApp_courses",
            id : id,
            value : value
          };
      },
  "setApp_selectedCourse" : function (id,value) {
          return {
            type : "setApp_selectedCourse",
            id : id,
            value : value
          };
      },
  "setCourse_name" : function (id,value) {
          return {
            type : "setCourse_name",
            id : id,
            value : value
          };
      },
  "setCourse_app" : function (id,value) {
          return {
            type : "setCourse_app",
            id : id,
            value : value
          };
      },
  "setCourse_inverseSelectedCourse" : function (id,value) {
          return {
            type : "setCourse_inverseSelectedCourse",
            id : id,
            value : value
          };
      },
  "setCourse_submissions" : function (id,value) {
          return {
            type : "setCourse_submissions",
            id : id,
            value : value
          };
      },
  "addCourse_submissions" : function (id,value) {
          return {
            type : "addCourse_submissions",
            id : id,
            value : value
          };
      },
  "setStudent_name" : function (id,value) {
          return {
            type : "setStudent_name",
            id : id,
            value : value
          };
      },
  "setStudent_submissions" : function (id,value) {
          return {
            type : "setStudent_submissions",
            id : id,
            value : value
          };
      },
  "addStudent_submissions" : function (id,value) {
          return {
            type : "addStudent_submissions",
            id : id,
            value : value
          };
      },
  "setSubmission_grade" : function (id,value) {
          return {
            type : "setSubmission_grade",
            id : id,
            value : value
          };
      },
  "setSubmission_course" : function (id,value) {
          return {
            type : "setSubmission_course",
            id : id,
            value : value
          };
      },
  "setSubmission_student" : function (id,value) {
          return {
            type : "setSubmission_student",
            id : id,
            value : value
          };
      },
  "calculateApp_view" : function (id) {
          return {
            type : "calculateApp_view",
            id : id
          };
      },
  "calculateApp_view_Many" : function (ids) {
          return {
            type : "calculateApp_view_Many",
            id : ids
          };
      },
  "calculateCourse_avgGrade" : function (id) {
          return {
            type : "calculateCourse_avgGrade",
            id : id
          };
      },
  "calculateCourse_avgGrade_Many" : function (ids) {
          return {
            type : "calculateCourse_avgGrade_Many",
            id : ids
          };
      },
  "calculateCourse_view" : function (id) {
          return {
            type : "calculateCourse_view",
            id : id
          };
      },
  "calculateCourse_view_Many" : function (ids) {
          return {
            type : "calculateCourse_view_Many",
            id : ids
          };
      },
  "calculateSubmission_grade2" : function (id) {
          return {
            type : "calculateSubmission_grade2",
            id : id
          };
      },
  "calculateSubmission_grade2_Many" : function (ids) {
          return {
            type : "calculateSubmission_grade2_Many",
            id : ids
          };
      },
  "calculateSubmission_pass" : function (id) {
          return {
            type : "calculateSubmission_pass",
            id : id
          };
      },
  "calculateSubmission_pass_Many" : function (ids) {
          return {
            type : "calculateSubmission_pass_Many",
            id : ids
          };
      },
  "calculateSubmission_view" : function (id) {
          return {
            type : "calculateSubmission_view",
            id : id
          };
      },
  "calculateSubmission_view_Many" : function (ids) {
          return {
            type : "calculateSubmission_view_Many",
            id : ids
          };
      },
  "createApp" : function (entity) {
          return {
            type : "createApp",
            entity : entity
          };
      },
  "createCourse" : function (entity) {
          return {
            type : "createCourse",
            entity : entity
          };
      },
  "createStudent" : function (entity) {
          return {
            type : "createStudent",
            entity : entity
          };
      },
  "createSubmission" : function (entity) {
          return {
            type : "createSubmission",
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
          Course : Lifted(function Course(props,state,store) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _2 = getCourse_name(state,scope.c);
                  var _0 = React.createElement("h1",{
                  },_2);
                  var _6 ;
                  var _5 ;
                  if(scope.c != null) {
                    var calc = calculateCourse_avgGrade(state,scope.c);
                    state = calc.state;
                    _5 = calc.result;
                  } else {
                    _5 = null;
                  }
                  if(_5 !== null) {
                    _6 = _5;
                  } else {
                    _6 = "No grades";
                  }
                  var _3 = React.createElement("h2",{
                  },"Average grade: ",_6);
                  var _14 = React.createElement("th",{
                  },"Student");
                  var _16 = React.createElement("th",{
                  },"Grade");
                  var _12 = React.createElement("tr",{
                  },_14,_16);
                  var _10 = React.createElement("thead",{
                  },_12);
                  var _20 = getCourse_submissions(state,scope.c);
                  var oldScope = scope;
                  var _22 = [];
                  for (var _23 = 0 ; _23 < _20.length ; _23++) {
                     ( function () {
                            var scope = _.assign({
                            },oldScope,{
                              submission : _20[_23]
                            });
                            var _21 = React.createElement(Component.Submission,{
                              s : scope.submission
                            });
                            _22.push(_.assign({
                            },_21,{
                              key : scope.submission
                            }));
                        } ) ();
                  }
                  var _18 = React.createElement("tbody",{
                  },_22);
                  var _8 = React.createElement("table",{
                  },_10,_18);
                  return {
                    result : React.createElement('group',{
                    },_0,_3,_8),
                    state : state
                  };
              },[]),
          Submission : Lifted(function Submission(props,state,store) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _4 = getSubmission_student(state,scope.s);
                  var _5 = getStudent_name(state,_4);
                  var _2 = React.createElement("td",{
                  },_5);
                  var _9 = getSubmission_grade(state,scope.s);
                  var _8 = React.createElement(imports["pixiedust/components/native/inputs"].OptFloatInput,{
                    value$identity :  ( function () {
                            return scope.s;
                        } ) (),
                    value$setter : actionCreators["setSubmission_grade"],
                    value : _9
                  });
                  var _6 = React.createElement("td",{
                  },_8);
                  var _0 = React.createElement("tr",{
                  },_2,_6);
                  return {
                    result : _0,
                    state : state
                  };
              },[]),
          App : Lifted(function App(props,state,store) {
                  var scope = _.assign({
                  },oldScope,props);
                  var _1 = getApp_courses(state,scope.app);
                  var _2 = getCourse_name_Many(state,_1);
                  var _3 = getApp_courses(state,scope.app);
                  var _4 = getApp_selectedCourse(state,scope.app);
                  var _0 = React.createElement(imports["../../components/Select"].Select,{
                    labels : _2,
                    choice : _3,
                    selection$identity :  ( function () {
                            return scope.app;
                        } ) (),
                    selection$setter : actionCreators["setApp_selectedCourse"],
                    selection : _4
                  });
                  var _5 = getApp_selectedCourse(state,scope.app);
                  var oldScope = scope;
                  var _7 ;
                  if(_5 !== null) {
                     ( function () {
                            var scope = _.assign({
                            },oldScope,{
                              course : _5
                            });
                            var _6 = React.createElement(Component.Course,{
                              c : scope.course
                            });
                            _7 = _6;
                        } ) ();
                  } else {
                    _7 = null;
                  }
                  return {
                    result : React.createElement('group',{
                    },_0,_7),
                    state : state
                  };
              },[])
        };
    } ) ();
module.exports.Component = Component;