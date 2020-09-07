const examDb = require('../../data-access/exam-db')

const exam = module.exports = {}

exam.list = async(req, res, next) => {
    const page = req.query.page || 1;
    const response = await examDb.listExam(page)
    res.send(response)
}

exam.add = async(req, res, next) => {
  const {name,exam_type,status} = req.body;
  const response = await examDb.addExam(name,exam_type,status)
  res.send(response)
}