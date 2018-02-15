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
  program.main().forEach(function(e){
    console.log(e);
  })
}

function browserRunner(program) {
  var main = program.main()
  window.Main = expressions;
  var expressions = main.map(e => isView(e) ? e : e === null ? 'null' : e.toString());
  var container = React.createElement('div', {}, expressions);
  var root = React.createElement(SchedulerProvider, {}, container);
  ReactDOM.render(root, document.body.appendChild(document.createElement('div')))
}

function isView(e) {
  return typeof(e === 'object' && e.$$typeof === Symbol.for('react.element'))
}

function renderElement(e) {
}


function isBrowser(){
  try{
    window;
    return true;
  } catch(e){
    return false;
  }
}