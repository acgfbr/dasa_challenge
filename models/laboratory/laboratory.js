let buildMakeLaboratory = function(laboratoryValidator) {
    return ({
        name,
        address
    } = {}) => {
      
        let {error} = laboratoryValidator({name, address})
        if (error) throw new Error(error)
      return {
        getName: () => name,
        getAddress: () => address,
        getStatus: () => 'ativo',
        getCreatedAt: () => new Date(),
        getUpdatedAt: () => new Date()
      }
    }
  }
  
  module.exports = buildMakeLaboratory
