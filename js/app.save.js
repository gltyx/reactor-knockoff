(function() {
'use strict';

// For iteration
var i;
var l;
var ri;
var pi;
var pl;
var ci;
var row;
var tile;
var upgrade;

var SAVE_MANAGER = function() {
	this.game;

	this.active_saver;

	this.init = function(game) {
		this.game = game;
	}
};

var save_manager = new SAVE_MANAGER();
window.save_manager = save_manager;

var LocalSaver = function() {
	this.save = function(data, callback) {
		save_manager.game.save_debug && console.log('LocalSaver.save');
		window.localStorage.setItem('rks', data);

		if ( callback ) {
			callback();
		}
	}

	this.enable = function() {
		save_manager.game.save_debug && console.log('LocalSaver.enable');
		localStorage.removeItem('google_drive_save');
		save_manager.active_saver = this;
	}

	this.load = function(callback) {
		save_manager.game.save_debug && console.log('LocalSaver.load');
		var rks = window.localStorage.getItem('rks');
		callback(rks);
	}
};

save_manager.LocalSaver = LocalSaver

var google_loaded = false;
var google_auth_called = false;

window.set_google_loaded = function() {
	save_manager.game.save_debug && console.log('set_google_loaded');
	google_loaded = true;

	if ( google_auth_called ) {
		google_saver.checkAuth(null, true);
	}
};

})();
