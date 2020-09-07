let Joi = require('joi')

let validator = (schema) =>

  (payload) => {
    
    let validation = schema.validate(payload, {abortEarly: false})
    
    
    if (validation.error) {
     
      let message = validation.error.message
 
      return {
        error: message
      }
    }
    return true
  }

module.exports = validator