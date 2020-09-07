const {
    listExam,
    addExam,
    updateExam,
    deleteExam,
  } 
   = require('./mysql/index')
  
  
   const examDb = {
    listExam,
    addExam,
    updateExam,
    deleteExam
  }
  
  module.exports = examDb
  