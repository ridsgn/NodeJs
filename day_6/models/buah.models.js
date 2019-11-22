const mongoose = require("mongoose")
const Schema = mongoose.Schema

let buahSchema = new Schema({
	id: Number,
	rasa: String,
	status: String,
	asal: String
})

let Buah = mongoose.model("Buah", buahSchema)

module.exports = Buah