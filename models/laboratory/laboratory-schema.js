let Joi = require('joi')

module.exports = Joi.object().keys({
  name: Joi.string().required().error(() => 'must have name as string'),
  address: Joi.string().required().error(() => 'must have address as string'),
  status: Joi.string().required().error(() => 'must have status as string'),
})
