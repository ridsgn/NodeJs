const express = require("express")
const router = express.Router()
const bookModel = require("../models/buku.model")

// router.get("/", (req, res) => {
// 	return res.send("Hello")
// })

router.post("/create", async (req, res) => {
	let { id_buku, judul, penulis, thn_terbit, penerbit } = req.body
	let input_data = {
		id_buku, judul, penulis, thn_terbit, penerbit
	}

	let data = new bookModel(input_data)
	data.save()

	return res.send({
		status: "Success",
		data,
		message: "Data buku berhasil dimasukkan"
	})
})

router.get("/getAll", async (req, res) => {
	let result = await bookModel.find({}).exec()

	res.send({
		status: "Success",
		result,
		message: "Semua data berhasil tampil"
	})
})

router.get("/:id", async (req, res) => {
	let { id } = req.params

	let data = await bookModel.findOne({ _id: id }).exec()

	return res.send({
		status: "Success",
		data,
		message: "Data detail sukses"
	})
})

module.exports = router
