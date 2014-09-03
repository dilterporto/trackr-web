var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var agente = new Schema({
	nome: String
});

mongoose.model('agente', agente);