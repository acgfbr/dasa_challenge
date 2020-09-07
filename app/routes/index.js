const express = require('express')
const router = express.Router()

const exam = require('./exam')
//const laboratory = require('./laboratory')

router.get('/exam/list', exam.list)

module.exports = router