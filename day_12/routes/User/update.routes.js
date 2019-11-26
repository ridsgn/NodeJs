const express = require('express')
const router = express.Router()
const Update = require("../../actions/User/update.actions")

router.put("/:id", async (req, res) => {
    try {
        let { id } = req.params
        let updated = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            gender: req.body.gender
        }
        let data = await new Update(id, updated).exec()

        return res.send({
            code: 200,
            status: "success",
            message: "Data updated!",
            data
        })
    } catch (err) {
        return res.send({
            code: 400,
            status: "error coy",
            message: err.message
        })
    }
})

module.exports = router