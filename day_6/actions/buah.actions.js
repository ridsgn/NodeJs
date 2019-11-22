const Buah = require("../models/buah.models")

const create = async (req) => {
	let { id, rasa, status, asal } = req.body
	id = parseInt(id)

	var insert_data = {
		id, rasa, status, asal
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
				id: v.id,
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
			id: id
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
			id: id
		}, data).exec()

		return query
	} catch (err) {
		throw err
	}
}

const del = async (id) => {
	try {
		let query = await Buah.findOneAndDelete({
			id: id
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