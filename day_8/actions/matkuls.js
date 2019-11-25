// ============== nama field dan type datanya =============
// nomatkul:   Number,
// namamatkul: String,
// dosen:      String,
// semester:   String
//                     Beberapa fungsi
//    {buat, semua, dapatkan semua/semua, detail, ubah, hapus}
// ========================================================

const Matkul = require('../models/matkul');
const Dosen = require('../models/dosen')

const buat = async (req) => {
	let { nomatkul, namamatkul, dosen, semester, id_dosen } = req.body
	nomatkul = parseInt(nomatkul)

	let masukann_data = {
		nomatkul, namamatkul, dosen, semester, id_dosen
	}

	let data = new Matkul(masukann_data)

	try {
		await data.save()

		return data
	} catch (err) {
		throw err
	}
}

const semua = async () => {
	try {
		let query = await Matkul.find({}).populate([
			{
				path: 'id_dosen',
				model: Dosen
			}
		]).exec()
		// let data = query.map((v, i) => {
		// 	return {
		// 		nomatkul: v.nomatkul,
		// 		namamatkul: v.namamatkul,
		// 		dosen: v.dosen,
		// 		semester: v.semester
		// 	}
		// })

		return query
	} catch (err) {
		throw err
	}
}

module.exports = {
	buat,
	semua
}