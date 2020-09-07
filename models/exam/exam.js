let buildMakeExam = function(examValidator) {
    return ({
        name,
        exam_type,
    } = {}) => {
      
        let {error} = examValidator({name, exam_type})
        if (error) throw new Error(error)
      return {
        getName: () => name,
        getExamType: () => exam_type,
        getStatus: () => 'ativo',
        getCreatedAt: () => new Date(),
        getUpdatedAt: () => new Date()
      }
    }
  }
  
  module.exports = buildMakeExam
