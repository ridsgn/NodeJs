const index = require("./index")
const buah = require("./buah.routes")
const stok = require("./stok.routes")

const routes = (app) => {
	app.use("/", index)
	app.use("/buah", buah)
	app.use("/stok", stok)
}

module.exports = routes