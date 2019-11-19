const express = require('express');
const router = express.Router()
const mhsModel = require('../models/mhs.model')

router.get('/', (req, res) => {
	return res.send('Hello')
})

module.exports = router