const mongoose = require("mongoose")
let host = "mongodb://localhost:27017/latihanday7"

mongoose.connect(host, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.set("useCreateIndex", true)
