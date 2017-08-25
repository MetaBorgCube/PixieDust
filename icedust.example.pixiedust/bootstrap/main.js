var program = require('./bootstrap');
var runner = require('pixiedust/runner');

require('./stylesheets/main.scss');
require('bootstrap/dist/css/bootstrap.css');

var container = document.createElement('div');
document.body.appendChild(container);
runner(program, container);