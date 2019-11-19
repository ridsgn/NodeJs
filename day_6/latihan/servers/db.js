const mongoose = require("mongoose")
let host = "mongodb://localhost:27017/latihan-day6"

mongoose.connect(host, {
	useNewUrlParser: true
})

mongoose.set("useCreateIndex", true)