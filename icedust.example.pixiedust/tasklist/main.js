var program = require('./tasklist');
var runner = require('pixiedust/runner');

require('./stylesheets/main.scss');
require('./stylesheets/font-awesome.css');

var container = document.createElement('div');
document.body.appendChild(container);
runner(program, container);