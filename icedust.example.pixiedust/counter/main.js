var program = require('./counter')
var runner = require('pixiedust/runner');

require('./stylesheets/main.scss');

var container = document.createElement('div');
document.body.appendChild(container);
runner(program, container);