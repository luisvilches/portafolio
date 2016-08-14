var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var category = new Schema({

	nombre: String,
	tipo: String,
	description: String

});

module.exports = mongoose.model('categoria',category);