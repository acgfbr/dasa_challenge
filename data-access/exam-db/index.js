const {
    listExam,
    findExam,
    addExam,
    updateExam,
    deleteExam,
  } 
   = require('./mysql/index')
  
  
   const examDb = {
    listExam,
    addExam,
    /*findExam,
    addExam,
    updateExam,
    deleteExam,*/
  }
  
  module.exports = examDb
  