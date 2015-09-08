var request = require('supertest-as-promised');
var api = require('../server.js');
var host = //'http://localhost:4200/api';
	process.env.API_TEST_HOST || api;

request = request(host);
describe('resource /vpp', function(){
	describe('POST', function(){
		it('should create a new register', function(done){
			var data = {
				"nota": {
					"title": "Titulo",
					"description": "Descripcion",
					"type": "js",					
					"body": "body json"					
				}
			};								

			request
				.post('/vpp')
				.send(data)			
				.set('Accept', 'application/json')
				.expect(201)
				.expect('Content-Type', /application\/json/)
				.end(function(err, res) {								
					var body = res.body;						
					expect(body).to.have.property('nota'); 
					var nota = body.nota;						
					
					expect(nota).to.have.property('title'); 
					expect(nota).to.have.property('description'); 
					expect(nota).to.have.property('type'); 
					expect(nota).to.have.property('body'); 
					expect(nota).to.have.property('id');
					done();
				});
		});		
	});
	
	describe('GET', function() {
		it('should retrieve an existent register', function(done) {			
			
			var data = {
				"nota": {
					"title": "Titulo",
					"description": "Descripcion",
					"type": "js",					
					"body": "body json"					
				}
			};								
			var id;
			request				
				.post('/vpp')				
				.send(data)	
				.set('Accept', 'application/json')
				.expect(201)
				.expect('Content-Type', /application\/json/)
				.then(function(res) {
					id = res.body.nota.id;
					return request
						.get('/vpp/' + id)
						.expect(200)
						.expect('Content-Type', 'application/json; charset=utf-8')
				}, done)
				.then(function(res) {
					var data = res.body.notas;
					expect(data).to.have.property('title'); 
					expect(data).to.have.property('description'); 
					expect(data).to.have.property('type'); 
					expect(data).to.have.property('body'); 
					expect(data).to.have.property('id', id);							
					done();											
				}, done);
				//POST data
				//GET data

				//Expects

		})
	});
})