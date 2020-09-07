let Joi = require('joi')

module.exports = Joi.object().keys({
  name: Joi.string().required().error(() => new Error('must have name as string')),
  exam_type: Joi.string().required().error(() => new Error('must have exam_type as string')),
})
