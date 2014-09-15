var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RotaSchema = new Schema({
	nome: String,
	locais: [
		{
			type: Schema.ObjectId,
			ref: 'local' 
		}
	]
});

mongoose.model('rota', RotaSchema);