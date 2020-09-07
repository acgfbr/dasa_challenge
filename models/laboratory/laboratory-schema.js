let Joi = require('joi')

module.exports = Joi.object().keys({
  name: Joi.string().required().error(() => new Error('must have name as string')),
  address: Joi.string().required().error(() => new Error('must have address as string')),
})
