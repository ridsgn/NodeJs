const Role = require("../../models/roles.model")

class UpdateRole {
    constructor(id, req) {
        (this._id = id),
            (this.name = req.body.name),
            (this.permission = req.body.permission)
    }

    async update() {
        try {
            let data = {
                name: this.name,
                _id: id,
                permission: this.permission,
                update_at: Date.now()
            }

            let query = await Role.findOneAndUpdate(
                {
                    _id: this.id
                },
                data,
                {
                    new: true
                }
            ).exec()

            return query
        } catch (err) {
            throw err
        }
    }
}

module.exports = UpdateRole