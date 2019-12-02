const user = require("./User/user.routes")
const reset = require("./reset_pass.routes")
const role = require("./Role/role.routes")

const routes = (app) => {
    app.use("/reset", reset)
    app.use("/role", role)
    app.use("/user", user)
}

module.exports = routes