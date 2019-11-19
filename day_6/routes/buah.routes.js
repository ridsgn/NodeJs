const express = require("express")
const router = express.Router()
const buahModel = require("../models/buah.model")

router.get("/", (req, res) => {
	return res.send("Hello Buah")
})

router.post("/create", async (req, res) => {
	let { rasa, status, asal } = req.body
	let input_data = {
		rasa,
		status,
		asal
	}

	let data = new buahModel(input_data)
	data.save()

	return res.send({
		status: "Success",
		data,
		message: "Buah berhasil ditambahkan"
	})
})

router.get("/getAll", async (req, res) => {
	let result = await buahModel.find({}).exec()

	res.send({
		status: "Success",
		result,
		message: "Semua data berhasil tampil"
	})
})

router.get("/:id", async (req, res) => {
	let { id } = req.params

	let data = await buahModel.findOne({ _id: id }).exec()

	return res.send({
		status: "Success",
		data,
		message: "Data detail sukses"
	})
})

router.put('/:id', async (req, res) => {
	let { id } = req.params
	let { rasa, status, asal } = req.body

	let update_data = {
		rasa,
		status,
		asal
	}

	try {
		let data = await buahModel.findByIdAndUpdate(id, update_data)

		return res.status(200).json({
			status: "Success",
			data,
			message: "Data sukses di update"
		})
	} catch (err) {
		return res.status(400).json({
			status: "Error",
			message: err.message
		})
	}
})

router.delete('/:id', async (req, res) => {
	let id = req.params
	let query = await buahModel.findOneAndDelete({ _id: id }).exec()

	return res.status(200).json({
		status: "Success",
		query,
		message: "Data berhasil di hapus"
	})
})

module.exports = router
