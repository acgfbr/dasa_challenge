const express = require('express')
const router = express.Router()
const laboratory = require('./laboratory')

router.get('/laboratory', laboratory.list)
router.post('/laboratory',laboratory.add)
router.put('/laboratory/:laboratory_id',laboratory.update)
router.delete('/laboratory/:laboratory_id',laboratory.delete)
router.post('/laboratory/associate',laboratory.associate)
router.post('/laboratory/disassociate',laboratory.disassociate)
module.exports = router;