const db = require('../../../db/mysql/index')
const makeLaboratory = require('../../../models/laboratory/index') 
const serialize = require('./serializer') 
const sequelize = require('sequelize')

let listLaboratory = async (page) => {
 
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

let addLaboratory = async(name,exam_type)=>{
  const exam = await db.exams.create({name,exam_type,status:'ativo', created_at: new Date(), updated_at: new Date()});
  return { exam:  exam};
}

let updateLaboratory = async(id,name,exam_type,status)=>{
  console.log(name);
  let exam = await db.exams.findAll({where: {id:id}});
  
  if(exam){
    await db.exams.update({name:name, exam_type: exam_type, status:status},{where: {id:id}});
  }
  return { exam: await db.exams.findAll({where: {id:id}}) };
}


let deleteLaboratory = async(id,name,exam_type,status)=>{
  await db.exams.destroy({where: {id:id}});
  return { message: 'deleted succesfully' };
}

module.exports = {
    listLaboratory,
    addLaboratory,
    updateLaboratory,
    deleteLaboratory
}

