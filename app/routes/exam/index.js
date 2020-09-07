const express = require('express')
const router = express.Router()
const exam = require('./exam')

router.get('/exam', exam.list)
router.post('/exam',exam.add)
router.put('/exam/:exam_id',exam.update)
router.delete('/exam/:exam_id',exam.delete)

module.exports = router;