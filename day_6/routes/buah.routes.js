const express = require("express")
const router = express.Router()
const { cre, detail, all, edit, del } = require("../actions/buah")

router.get("/", (req, res) => {
	return res.send("Hello Buah")
})

router.post("/", (req, res) => {
	let rasa = req.body

	let data = cre(rasa)

	return res.send({
		status: "success",
		data,
		message: "Buku berhasil dibuat"
	})
})

router.get("/all", async (req, res) => {
	try {
		let data = await all()

		return res.send({
			status: "Success",
			data,
			message: "Semua data berhasil tampil"
		})
	} catch (err) {
		return res.status(400).json({
			status: "Error",
			message: err.message
		})
	}
})

router.get("/:id", async (req, res) => {
	try {
		let { id } = req.params
		let data = await detail(id)

		return res.status(200).json({
			status: "Success",
			data,
			message: "Data detail sukses"
		})
	} catch (err) {
		return res.status(400).json({
			status: "Error",
			message: err.message
		})
	}
})

router.put('/:id', async (req, res) => {
	let { id } = req.params
	let update_data = {
		rasa: req.body.rasa,
		status: req.body.status,
		asal: req.body.asal
	}

	try {
		let data = await edit(id, update_data)

		return res.status(200).json({
			status: "Success",
			data,
			message: "Data buah berhasil diubah"
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
	try {
		let data = await del(id)

		return res.status(200).json({
			status: "Success",
			data,
			message: "Data berhasil di hapus"
		})
	} catch (err) {
		return res.status(400).json({
			status: "Error",
			message: err.message
		})
	}
})

module.exports = router
