var mongoose = require('mongoose');

require('../models/checkin');

var Checkin = mongoose.model('checkin');

module.exports = function(app){
	
	app.get('/', function(req, res) {

		Checkin
	  	.find()
	  	.populate('agente')
	  	.exec(function(err, checkins){

			if(err)
				res.send(500);

			res.render('index', { title: 'Express', checkins: checkins });
		});
	});


	app.get('/rotas', function(req, res) {
	  res.render('rotas', { title: 'Rotas' });
	});

};
