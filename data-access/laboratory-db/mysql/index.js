const db = require('../../../db/mysql/index')
const makeLaboratory = require('../../../models/laboratory/index') 
const serialize = require('./serializer') 
const sequelize = require('sequelize')

let listLaboratory = async (page) => {
 
  const options = {
    attributes: ['id', 'name', 'address','status','created_at','updated_at'],
    page: page,
    paginate: 25, 
    order: [['id', 'ASC']],
    where: { status:  'ativo'  }
  }
  const { docs, pages, total } = await db.laboratorys.paginate(options)
  
  var obj2 = JSON.parse(JSON.stringify(docs));

  for(let i = 0; i < obj2.length; i++){
      const labExamObjs = await db.laboratorys_exams.findAll({where: { laboratory_id: obj2[i].id }});
      const ids = labExamObjs.map((obj)=>{
        return obj.exam_id;
      })

      const exams = await db.exams.findAll({where: {id:ids}})
      obj2[i].exams = exams;
  }

  return {laboratorys:obj2, pages, total}
  
}

let addLaboratory = async(labValidator)=>{
  
    let lab = makeLaboratory(labValidator);

    let newLab = {
      name: lab.getName(),
      address: lab.getAddress(),
      status: lab.getStatus(),
      created_at: lab.getCreatedAt(),
      updated_at: lab.getUpdatedAt(),
    }
    const labCreated = await db.laboratorys.create(newLab);
    return { laboratory:  labCreated};
}

let updateLaboratory = async(id,name,address,status)=>{

  let lab = await db.laboratorys.findAll({where: {id:id}});
  
  if(lab){
    await db.laboratorys.update({name:name, address: address, status:status},{where: {id:id}});
  }
  return { laboratory: await db.laboratorys.findAll({where: {id:id}}) };
}


let deleteLaboratory = async(id)=>{
  await db.laboratorys.destroy({where: {id:id}});
  return { message: 'deleted succesfully' };
}


let associate = async(laboratory_id,exam_id)=>{
    await db.laboratorys_exams.create({ laboratory_id, exam_id, created_at: new Date(), updated_at: new Date() });
    return { message: 'associate with success' };
}

let disassociate = async(laboratory_id,exam_id)=>{
  await db.laboratorys_exams.destroy({ where:{laboratory_id:laboratory_id, exam_id:exam_id}});
  return { message: 'disassociate with success' };
}

module.exports = {
    listLaboratory,
    addLaboratory,
    updateLaboratory,
    deleteLaboratory,
    associate,
    disassociate
}

