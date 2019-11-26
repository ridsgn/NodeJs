const User = require("../../models/users.models")

class Detail {
    constructor(id) {
        (this.id = id)
    }

    async exec() {
        try {
            let data = await User.findOne({
                _id: this.id
            }).exec()

            if (data === null) {
                throw new Error("Data not found")
            }

            return {
                data
            }
        } catch (err) {
            throw err
        }
    }

    async getAll() {
        try {
            let data = await User.find()

            return data
        } catch (err) {
            throw err
        }
    }
}

module.exports = Detail