const Role = require("../../models/roles.models")

class DeleteRole {
    constructor(id) {
        this._id = id
    }

    async delete() {
        try {
            let query = await Role.findOneAndUpdate(
                {
                    _id: this._id
                },
                {
                    delete_at: Date.now()
                },
                {
                    new: true
                }
            ).exec();

            return query
        } catch (err) {
            throw err
        }
    }
}

module.exports = DeleteRole