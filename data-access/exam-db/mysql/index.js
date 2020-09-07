const db = require('../../../db/mysql/index')
const makeExam = require('../../../models/exam/index') 
const serialize = require('./serializer') 
const sequelize = require('sequelize')
const buildMakeExam = require('../../../models/exam/exam')

let listExam = async (page) => {
 
  const options = {
    attributes: ['id', 'name', 'exam_type','status','created_at','updated_at'],
    page: page,
    paginate: 25, 
    order: [['id', 'ASC']],
    where: { status:  'ativo'  }
  }
  const { docs, pages, total } = await db.exams.paginate(options)


  var obj2 = JSON.parse(JSON.stringify(docs));

  for(let i = 0; i < obj2.length; i++){
      const labExamObjs = await db.laboratorys_exams.findAll({where: { exam_id: obj2[i].id }});
      const ids = labExamObjs.map((obj)=>{
        return obj.laboratory_id;
      })

      const laboratorys = await db.laboratorys.findAll({where: {id:ids}})
      obj2[i].laboratorys = laboratorys;
  }

  return {exams:obj2, pages, total}
  
}

let addExam = async(examValidator)=>{
  
  let exam = makeExam(examValidator);

  let newExam = {
    name: exam.getName(),
    exam_type: exam.getExamType(),
    status: exam.getStatus(),
    created_at: exam.getCreatedAt(),
    updated_at: exam.getUpdatedAt(),
  }
  const examCreated = await db.exams.create(newExam);
  return { exam:  examCreated};
}

let updateExam = async(id,name,exam_type,status)=>{
  let exam = await db.exams.findAll({where: {id:id}});
  
  if(exam){
    await db.exams.update({name:name, exam_type: exam_type, status:status},{where: {id:id}});
  }
  return { exam: await db.exams.findAll({where: {id:id}}) };
}


let deleteExam = async(id)=>{
  await db.exams.destroy({where: {id:id}});
  return { message: 'deleted succesfully' };
}

module.exports = {
    listExam,
    addExam,
    updateExam,
    deleteExam
}

