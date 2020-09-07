const labDb = require('../../../data-access/laboratory-db')

const lab = module.exports = {}

lab.list = async(req, res, next) => {
    const page = req.query.page || 1;
    const response = await labDb.listLaboratory(page)
    res.send(response)
}

lab.add = async(req, res, next) => {
  const response = await labDb.addLaboratory(req.body).catch((err) => { res.send({error: err.message})})
  res.send(response)
}

lab.update = async(req, res, next) => {
  const laboratory_id = req.params.laboratory_id;
  const {name,address,status} = req.body;
  const response = await labDb.updateLaboratory(laboratory_id,name,address,status)
  res.send(response)
}


lab.delete = async(req, res, next) => {
  const laboratory_id = req.params.laboratory_id;
  
  const response = await labDb.deleteLaboratory(laboratory_id)
  res.send(response)
}

lab.associate = async(req, res, next) => {
    const laboratory_id = req.body.laboratory_id;
    const exam_id = req.body.exam_id;
    
    const response = await labDb.associate(laboratory_id,exam_id)
    res.send(response)
}
lab.disassociate = async(req, res, next) => {
    const laboratory_id = req.body.laboratory_id;
    const exam_id = req.body.exam_id;
    
    const response = await labDb.disassociate(laboratory_id,exam_id)
    res.send(response)
}