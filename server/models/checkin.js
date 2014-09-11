var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CheckinSchema = new Schema({
	rota: String,
	local: {
		geolocalizacao:{
			latitude: String,
			longitude: String
		},
		endereco: String,
		nome: String
	},
	agente:{
		type: Schema.ObjectId,
		ref: 'agente'
	}
	momento: {
		type: Date,
		default: Date.now
	},
	observacao: String
});

mongoose.model('checkin', CheckinSchema);