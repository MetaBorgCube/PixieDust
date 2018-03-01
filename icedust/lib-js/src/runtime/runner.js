var React = require('react');
var ReactDOM = require('react-dom');
var Scheduler = require('./Scheduler').AnimationFrameScheduler;
var SchedulerProvider = require('./components/SchedulerProdiver');

function runner(program){
  if(isBrowser()){
    console.log('executing in browser mode');
    browserRunner(program);
    consoleRunner(program);
  } else {
    console.log('executing in console mode');
    consoleRunner(program)
  }
}
module.exports = runner;


function consoleRunner(program) {
  program.main().execute.forEach(function(e){
    console.log(e);
  })
}

function browserRunner(program) {
  var main = program.main();
  window.data = main.data;
  window.execute = main.execute;
  var expressions = main.execute.map((e, i) =>
    React.createElement('div',
      {
        key: 'execute[' + i + ']'
      },
      toView(e)
    ));
  console.log(expressions);
  var container = React.createElement('div', {}, expressions);
  var scheduler = new Scheduler();
  var root = React.createElement(SchedulerProvider, {scheduler: scheduler}, container);
  ReactDOM.render(root, document.body.appendChild(document.createElement('div')))
}

function toView(e) {
  if(Array.isArray(e)) {
    return e.map(toView)
  } else if(isView(e)) {
    return e;
  } else {
    return e === null ? 'null' : e.toString();
  }
}

function isView(e) {
  return typeof(e === 'object') && e.$$typeof === Symbol.for('react.element')
}


function isBrowser(){
  try{
    window;
    return true;
  } catch(e){
    return false;
  }
}