let buildMakeExam = function(examValidator) {
    return ({
        name,
        exam_type,
        status,
        created_at,
        updated_at
    } = {}) => {
      
        let {error} = examValidator({name, exam_type, status})
        if (error) throw new Error(error)
      return {
        getName: () => name,
        getExamType: () => exam_type,
        getStatus: () => status,
        getCreatedAt: () => created_at,
        getUpdatedAt: () => updated_at
      }
    }
  }
  
  module.exports = buildMakeExam
