const create = require("./User/create.routes")
const detail = require("./User/detail.routes")
const del = require("./User/destroy.routes")

const routes = (app) => {
    app.use("/delete", del)
    app.use("/create", create)
    app.use("/", detail)
}

module.exports = routes