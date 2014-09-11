var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LocalSchema = new Schema({
	geolocalizacao: {
		latitude: String,
		longitude: String
	},
	endereco: String,
	nome: String
});

mongoose.model('local', LocalSchema);