const mongoose = require("mongoose")
const Schema = mongoose.Schema

let stokSchema = new Schema({
  pemasukan: Number,
  pengeluaran: Number,
  stok: Number,
})

let Stok = mongoose.model("Stok", stokSchema)

module.exports = Stok
