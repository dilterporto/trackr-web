var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var checkin = new Schema({
	local: {
		type: Schema.ObjectId,
		ref: 'local'
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

mongoose.model('checkin', checkin);