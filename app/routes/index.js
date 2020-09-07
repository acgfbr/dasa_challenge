const express = require('express')
const router = express.Router()

const examRoutes = require('./exam')
const laboratory = require('./laboratory')


router.use(examRoutes)

/*

*/
module.exports = router