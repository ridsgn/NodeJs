const mongoose = require('mongoose');

const mhsSchema = new mongoose.Schema({
	nim: Number,
	nama: String,
	jurusan: String,
	prodi: String,
	angkatan: Number
})

const Mahasiswa = mongoose.model('Mahasiswa', mhsSchema)

module.exports = Mahasiswa