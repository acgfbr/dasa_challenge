const {
    listLaboratory,
    addLaboratory,
    updateLaboratory,
    deleteLaboratory,
  } 
   = require('./mysql/index')
  
  
   const laboratoryDb = {
    listLaboratory,
    addLaboratory,
    updateLaboratory,
    deleteLaboratory
  }
  
  module.exports = laboratoryDb
  