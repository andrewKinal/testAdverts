const Joi = require('joi');

module.exports = Joi.object({
  title: Joi.string().min(3).max(200).required(),
  description: Joi.string().min(3).max(1000).required(),
  photoLinks: Joi.array().min(1).max(3).required(),
  price: Joi.number().required(),
});