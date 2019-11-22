const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let dosenSchema = new Schema({
    nik: Number,
    nama: String,
    email: String,
    tlp: Number,
    matkul: String,
    id_matkul: String
});

let Dosen = mongoose.model("Dosen", dosenSchema);

module.exports = Dosen