const db = require('../../../db/mysql/index')
const makeExam = require('../../../models/exam/index') 
const serialize = require('./serializer') 
const sequelize = require('sequelize')

let listExam = async (page) => {
 
  const options = {
    attributes: ['id', 'name', 'exam_type','status','created_at','updated_at'],
    page: page,
    paginate: 25, 
    order: [['id', 'ASC']]
  }
  const { docs, pages, total } = await db.exams.paginate(options)
  return {exams:docs, pages, total}
  
}

/*

  const options = {
    attributes: ['id', 'name', 'exam_type','status','created_at','updated_at'],
    page: 1, // Default 1
    paginate: 25, // Default 25
    order: [['id', 'ASC']]
  }
  const { docs, pages, total } = db.exams.paginate(options)
  return {
    docs: docs,
    pages: pages,
    total: total
  }
*/



module.exports = {
    listExam,
   
}

