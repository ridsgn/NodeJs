const express = require('express')
const router = express.Router()
const Detail = require("../../actions/User/detail.actions")

router.get("/all", async (req, res) => {
    try {
        let data = await new Detail().getAll()

        return res.send({
            code: 200,
            status: "success",
            message: "Detail data!",
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

router.get("/detail/:id", async (req, res) => {
    try {
        let data = await new Detail(req.params.id).exec()

        return res.send({
            code: 200,
            status: "success",
            message: "Detail data!",
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