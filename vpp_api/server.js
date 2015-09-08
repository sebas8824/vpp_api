/**
 *	Dependencies
 **/
var express = require('express');
var bp  = require('body-parser');

/**
 *	Variables
 **/
var server = express();
/**
 *	Middleware
 **/
server.use(bp.json('application/json'));

/**
 *	Routes	
 **/
 var serverLib = require('./lib/data');
 server.use(serverLib);

/**
 *	Expose or start server
 **/
if(!module.parent) {
	server.listen(4000, function() {
		console.log("Listening in http://localhost:4000");		
	});
} else {
	module.exports = server;	
}

