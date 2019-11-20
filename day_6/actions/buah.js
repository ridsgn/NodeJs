const Buah = require("../models/buah.model")

const create = async (req) => {
	let { rasa, status, asal } = req.body

	let insert_data = {
		rasa,
		status,
		asal
	}

	let data = new Buah(insert_data)

	try {
		await data.save()

		return data
	} catch (err) {
		throw err
	}
}

const all = async () => {
	try {
		let query = await Buah.find({}).exec()
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
		let query = await Buah.findOne({
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
		let query = await Buah.findOneAndUpdate({
			_id: id
		}, data).exec()

		return query
	} catch (err) {
		throw err
	}
}

const del = async (id) => {
	try {
		let query = await Buah.findOneAndDelete({
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