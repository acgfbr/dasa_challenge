let buildMakeExam = require('./exam')
const examSchema = require('./exam-schema')
let examValidator = require('../../validator')(examSchema)
let makeExam = buildMakeExam(examValidator)
module.exports = makeExam

