module.exports = function(app){
	app.get('/api', function(req, res) {
	  res.send({ _: 'i am a resource' });
	});
};
