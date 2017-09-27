var program = require('./WebLabGrader')
var runner = require('pixiedust/runner');

require('./stylesheets/main.scss');


require('material-design-icons/iconfont/material-icons.css');

require('react-tap-event-plugin')();

var container = document.createElement('div');
document.body.appendChild(container);
runner(program, container);