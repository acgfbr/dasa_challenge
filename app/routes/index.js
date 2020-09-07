const express = require('express')
const router = express.Router()

const exam = require('./exam')
//const laboratory = require('./laboratory')

router.get('/exam', exam.list)
router.post('/exam',exam.add)

module.exports = router