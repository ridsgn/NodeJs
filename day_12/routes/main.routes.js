const user = require("./User/user.routes")
const reset = require("./reset_pass.routes")
const role = require("./Role/role.routes")
const login = require("./New/login.routes")
const reg = require("./New/register.routes")
const verifyJwt = require("../middleware/verify_jwt.middleware")
const activate = require("./New/activation.routes")

const routes = (app) => {
    app.use("/reset", reset)
    app.use("/role", verifyJwt(), role)
    app.use("/user", verifyJwt(), user)
    app.use("/login", login)
    app.use("/registration", reg)
}

module.exports = routes