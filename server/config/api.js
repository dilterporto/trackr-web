module.exports = function(app){
	
	app.get('/api/agentes', function(req, res) {
	  res.send({ _: 'i am a resource' });
	});

	app.get('/api/checkins', function(req, res) {
	  res.send({ _: 'i am a resource' });
	});

	app.get('/api/execucoes', function(req, res) {
	  res.send({ _: 'i am a resource' });
	});

	app.get('/api/locais', function(req, res) {
	  res.send({ _: 'i am a resource' });
	});

	app.get('/api/rotas', function(req, res) {
	  res.send({ _: 'i am a resource' });
	});

};
