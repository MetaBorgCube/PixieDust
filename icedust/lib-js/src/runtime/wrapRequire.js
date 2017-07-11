var loadModule = require('./loadModule');

var importRegex = /^imports\/(.*)$/

function wrapRequire(require, imports){
	function require2(name){
		var match = name.match(importRegex);
		if(match == null){
			return require(name);
		} else{
			var importName = match[1];
			return imports[importName];
		}
		var entryName = split[split.length - 1];
	  var entry = current.entries[entryName];
	  return entry !== undefined ? entry : require(name);
	}
	return require2;
}

module.exports = wrapRequire;