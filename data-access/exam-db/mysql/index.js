const db = require('../../../db/mysql/index')
const makeExam = require('../../../models/exam/index') 
const serialize = require('./serializer') 
const sequelize = require('sequelize')

let listExam = async (page) => {
 
  const options = {
    attributes: ['id', 'name', 'exam_type','status','created_at','updated_at'],
    page: page,
    paginate: 25, 
    order: [['id', 'ASC']],
    where: { status:  'ativo'  }
  }
  const { docs, pages, total } = await db.exams.paginate(options)
  return {exams:docs, pages, total}
  
}

let addExam = async(name,exam_type,status)=>{
  const exam = await db.exams.create({name,exam_type,status, created_at: new Date(), updated_at: new Date()});
  return { exam:  exam};
}

module.exports = {
    listExam,
    addExam
}

