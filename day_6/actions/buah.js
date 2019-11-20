const buahModel = require("../models/buah.model")

const cre = async (bos) => {
	let rasa = bos

	let insert_data = {
		rasa
	}

	console.log(bos)

	let data = new buahModel(insert_data)

	try {
		await data.save()

		return data
	} catch (err) {
		throw err
	}
}

const all = async () => {
	try {
		let query = await buahModel.find({}).exec()
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
		let query = await buahModel.findOne({
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
		let query = await buahModel.findOneAndUpdate({
			_id: id
		}, data).exec()

		return query
	} catch (err) {
		throw err
	}
}

const del = async (id) => {
	try {
		let query = await buahModel.findOneAndDelete({
			_id: id
		}).exec()

		return query
	} catch (err) {
		throw err
	}
}

module.exports = {
	cre,
	detail,
	all,
	edit,
	del
}