const express = require("express")
const router = express.Router()
const stokModel = require("../models/stok.model")

router.get("/", (req, res) => {
	return res.send("Hello Stok")
})

router.post("/create", async (req, res) => {
	let { pemasukan, pengeluaran, stok } = req.body
	let input_data = {
		pemasukan,
		pengeluaran,
		stok
	}

	let data = new stokModel(input_data)
	data.save()

	return res.send({
		status: "Success",
		data,
		message: "Stok berhasil ditambahkan"
	})
})

router.get("/getAll", async (req, res) => {
	let result = await stokModel.find({}).exec()

	res.send({
		status: "Success",
		result,
		message: "Semua data berhasil tampil"
	})
})

router.get("/:id", async (req, res) => {
	let { id } = req.params

	let data = await stokModel.findOne({ _id: id }).exec()

	return res.send({
		status: "Success",
		data,
		message: "Data detail sukses"
	})
})

router.put('/:id', async (req, res) => {
	let { id } = req.params
	let { pemasukan, pengeluaran, stok } = req.body

	let update_data = {
		pemasukan,
		pengeluaran,
		stok
	}

	try {
		let data = await stokModel.findByIdAndUpdate(id, update_data)

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
	let query = await stokModel.findOneAndDelete({ _id: id }).exec()

	return res.status(200).json({
		status: "Success",
		query,
		message: "Data berhasil di hapus"
	})
})

module.exports = router
