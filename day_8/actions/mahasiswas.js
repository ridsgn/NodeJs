const Mahasiswa = require("../models/mahasiswa");
const Matkul = require("../models/matkul")
const Dosen = require("../models/dosen")

const create = async (req) => {
	let { npm, nama, email, tlp, jurusan, id_dosen, id_matkul } = req.body
	tlp = parseInt(tlp)
	var insert_data = {
		npm,
		nama,
		email,
		tlp,
		jurusan,
		id_dosen,
		id_matkul
	}

	let data = new Mahasiswa(insert_data)

	try {
		await data.save()

		return data
	} catch (err) {
		throw err
	}
}


const getAll = async () => {
	try {
		let query = await Mahasiswa.find({}).populate([
			{
				path: 'id_matkul',
				model: Matkul
			},
			{
				path: 'id_dosen',
				model: Dosen
			}
		]).exec()
		// let data = query.map((v, i) => {
		// 	return {
		// 		npm: v.npm,
		// 		nama: v.nama,
		// 		email: v.email,
		// 		tlp: v.tlp,
		// 		jurusan: v.jurusan
		// 	}
		// })

		return query
	} catch (err) {
		throw err
	}
}

const getDetail = async (id) => {
	try {
		let query = await Mahasiswa.findOne({
			_id: id
		}).exec()

		return query
	} catch (err) {
		throw err
	}
}

const update = async (id, updated_data) => {
	let { npm, nama, email, tlp, jurusan } = updated_data

	let data = {
		npm, nama, email, tlp, jurusan
	}

	try {
		let query = await Mahasiswa.findOneAndUpdate({
			_id: id
		}, data).exec()

		return query
	} catch (err) {
		throw err
	}
}

const destroy = async (id) => {
	try {
		let query = await Mahasiswa.findOneAndDelete({
			_id: id
		}).exec()

		return query
	} catch (err) {
		throw err
	}
}

module.exports = {
	create,
	getAll,
	getDetail,
	update,
	destroy
}