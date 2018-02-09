var ReactDOM = require('react-dom/server');
var uuid = require('uuid');

function renderViewToString(view){
  return ReactDOM.renderToString(view);
}

function callDirtySubscriber(dirtySubscriber) {
  dirtySubscriber();
}

function generateUniqueIdentifier() {
  return uuid.v4();
}

module.exports = {
  callDirtySubscriber: callDirtySubscriber,
  renderViewToString: renderViewToString
};