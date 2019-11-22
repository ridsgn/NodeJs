const Stok = require("../models/stok.model")

const create = async (req) => {
	let { pemasukan, pengeluaran, stok } = req.body
		(pemasukan, pengeluaran, stok) = parseInt({ pemasukan, pengeluaran, stok })
	let insert_data = {
		pemasukan,
		pengeluaran,
		stok
	}

	let data = new Stok(insert_data)

	try {
		await data.save()

		return data
	} catch (err) {
		throw err
	}
}

const all = async () => {
	try {
		let query = await Stok.find({}).exec()
		let data = query.map((v, i) => {
			return {
				rasa: v.rasa,
				status: v.status,
				asal: v.asal
			}
		})
		return data
	} catch (err) {
		throw err
	}
}

const detail = async (id) => {
	try {
		let query = await Stok.findOne({
			_id: id
		}).exec()
		return query
	} catch (err) {
		throw err
	}
}

const edit = async (id, update_data) => {
	let { rasa, status, asal } = update_data

	let data = {
		rasa,
		status,
		asal
	}

	try {
		let query = await Stok.findOneAndUpdate({
			_id: id
		}, data).exec()

		return query
	} catch (err) {
		throw err
	}
}

const del = async (id) => {
	try {
		let query = await Stok.findOneAndDelete({
			_id: id
		}).exec()

		return query
	} catch (err) {
		throw err
	}
}

module.exports = {
	create,
	detail,
	all,
	edit,
	del
}