const Role = require("../../models/roles.models")

class CreateRole {
    constructor(req) {
        (this.name = req.body.name),
            (this.permission = req.body.permission)

    }

    async exec() {
        try {
            let query = new Role({
                name: this.name,
                permission: this.permission
            })
            await query.save()

            return query
        } catch (err) {
            throw err
        }
    }
}

module.exports = CreateRole

