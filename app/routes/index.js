const express = require('express')
const router = express.Router()

const examRoutes = require('./exam')
const labRoutes = require('./laboratory')


router.use(examRoutes)
router.use(labRoutes)

router.get('/',(req,res,next) => {
    res.send({ message: 'hello dasa, ME CONTRATA :)' });
})

/*

*/
module.exports = router