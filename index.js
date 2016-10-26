var fs = require('fs');
var path = require('path');
var mongoose = require('mongoose');

// Object that will be exported
var db = function(dir) {
	this.dir = dir;	

	// Loads each model as a property of the module
	var	_files = fs.readdirSync(dir);
	for (var file in _files) {
		if(_files[file][0] !== '.') {
			var module = _files[file].substr(0, _files[file].length-3);
			this[module] = require(dir + '/' + module);
		}
	}

	this.connect = function(uri, options) {
		return mongoose.connect(uri, options);
	}

	return this;
};

module.exports = db;
