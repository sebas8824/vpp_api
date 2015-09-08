var app = require('express')();
var db = {};

/**
 *	Routes	
 **/
//Ojo por que estos apuntan al mismo recurso
app.route('/vpp/:id?')
	//Logging
	.all(function(req, res, next) {
		res.set('Content-Type', 'application/json');
		next();
	})
	//POST
	.post(function(req, res) {		
		var data = req.body.nota;			
		data.id = Date.now();	
		db[data.id] = data;
  			res
				.status(201)
				.json({
					nota: data
				});
	})
	//GET
	.get(function(req, res) {
		var id = req.params.id;
		var data = db[id];
		res.json({
			notas: data
		});
	})
	//PUT
	.put(function(req, res) {
		
	})
	//DELETE
	.delete(function(req, res) {
		
	});

module.exports = app;