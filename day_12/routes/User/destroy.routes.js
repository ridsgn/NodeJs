const express = require('express')
const router = express.Router()
const Delete = require("../../actions/User/destroy.actions")

router.delete("/:id", async (req, res) => {
    try {
        let data = await new Delete(req.params.id).exec()

        return res.send({
            code: 200,
            status: "success",
            message: "Data deleted!",
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