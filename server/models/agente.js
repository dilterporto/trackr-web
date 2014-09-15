var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AgenteSchema = new Schema({
	nome: String,
	email: String
});

mongoose.model('agente', AgenteSchema);