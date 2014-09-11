module.exports = function(app){
	app.get('/', function(req, res) {
	  res.render('index', { title: 'Express' });
	});


	app.get('/rotas', function(req, res) {
	  res.render('rotas', { title: 'Rotas' });
	});

};
