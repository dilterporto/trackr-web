var mongoose = require('mongoose');

require('../models/agente');
require('../models/local');
require('../models/checkin');
require('../models/rota');

var Agente = mongoose.model('agente'),
	Local = mongoose.model('local'),
	Checkin = mongoose.model('checkin'),
	Rota = mongoose.model('rota');


module.exports = function(app){
	
	app.get('/api/agentes', function(req, res) {
		res.send({ _: 'i am a resource' });	
	});

	app.get('/api/checkins', function(req, res) {
	  
	  Checkin
	  	.find()
	  	.populate('agente')
	  	.exec(function(err, checkins){

			if(err)
				res.send(500);

			res.send(checkins);
		});
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

	app.post('/api/checkin', function(req, res){

		//	apply refactor with promisses

		Rota.findOne({ _id: req.body.rota_id }, function(err1, rota){

			Local.findOne({ _id: req.body.local_id }, function(err2, local){
	
				Agente.findOne({ _id: req.body.agente_id }, function(err3, agente){					
					var checkin = new Checkin({
						local: {								
							latitude: local.geolocalizacao.latitude,
							longitude: local.geolocalizacao.longitude,								
							endereco: local.endereco,
							nome: local.nome
						},
						agente: agente,
						observacao: req.body.observacao,
						rota: rota.nome
					});

					checkin.save(function(err){
						if(err)
							res.send(500);

						res.send(200);			
					})
					
				});

			});	

		});

		//app.io.emit('checkin', req.body );

	});

};
