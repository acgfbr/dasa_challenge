const express = require('express')
const router = express.Router()

const examRoutes = require('./exam')
const labRoutes = require('./laboratory')


router.use(examRoutes)
router.use(labRoutes)

/*

*/
module.exports = router