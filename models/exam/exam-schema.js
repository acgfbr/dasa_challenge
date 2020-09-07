let Joi = require('joi')

module.exports = Joi.object().keys({
  name: Joi.string().required().error(() => 'must have name as string'),
  exam_type: Joi.string().required().error(() => 'must have exam_type as string'),
  status: Joi.string().required().error(() => 'must have status as string'),
})
