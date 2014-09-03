var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var local = new Schema({
	geolocalizacao: {
		latitude: String,
		longitude: String
	},
	endereco: String,
	nome: String
});

mongoose.model('local', local);