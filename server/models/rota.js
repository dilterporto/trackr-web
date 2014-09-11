var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RotaSchema = new Schema({
	nome: String,
	locais: [
		{
			geolocalicazao: {
				latitude: String,
				longitude: String
			},
			nome: String,
			checkin: {
				type: Schema.ObjectId,
				ref: 'checkin'
			}
		}
	]


});

RotaSchema.methods.checkin(function(){



});



mongoose.model('rota', RotaSchema);