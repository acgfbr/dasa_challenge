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
  return {laboratorys:docs, pages, total}
  
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

module.exports = {
    listLaboratory,
    addLaboratory,
    updateLaboratory,
    deleteLaboratory
}

