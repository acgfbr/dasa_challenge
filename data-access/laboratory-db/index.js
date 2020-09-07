const {
    listLaboratory,
    addLaboratory,
    updateLaboratory,
    deleteLaboratory,
    associate,
    disassociate
  } 
   = require('./mysql/index')
  
  
   const laboratoryDb = {
    listLaboratory,
    addLaboratory,
    updateLaboratory,
    deleteLaboratory,
    associate,
    disassociate
  }
  
  module.exports = laboratoryDb
  