let buildMakeLaboratory = function(laboratoryValidator) {
    return ({
        name,
        address,
        status,
        created_at,
        updated_at
    } = {}) => {
      
        let {error} = laboratoryValidator({name, address, status})
        if (error) throw new Error(error)
      return {
        getName: () => name,
        getAddress: () => address,
        getStatus: () => status,
        getCreatedAt: () => created_at,
        getUpdatedAt: () => updated_at
      }
    }
  }
  
  module.exports = buildMakeLaboratory
