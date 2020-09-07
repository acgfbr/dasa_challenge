const examDb = require('../../data-access/exam-db')

const exam = module.exports = {}

exam.list = async(req, res, next) => {
    const page = req.query.page || 1;
    const response = await examDb.listExam(page)
    res.send(response)
}

exam.add = async(req, res, next) => {
  const {name,exam_type} = req.body;
  const response = await examDb.addExam(name,exam_type)
  res.send(response)
}

exam.update = async(req, res, next) => {
  const exam_id = req.params.exam_id;
  const {name,exam_type,status} = req.body;
  const response = await examDb.updateExam(exam_id,name,exam_type,status)
  res.send(response)
}


exam.delete = async(req, res, next) => {
  const exam_id = req.params.exam_id;
  
  const response = await examDb.deleteExam(exam_id)
  res.send(response)
}