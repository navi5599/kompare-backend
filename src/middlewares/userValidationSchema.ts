const Joi = require('joi');

const userSchema = Joi.object({
  Email: Joi.string().email().required(),
  Name: Joi.string().alphanum().min(3).max(30).required(),
  Surname: Joi.string().alphanum().min(3).max(30).required(),
  City: Joi.string().alphanum().min(3).max(30).required(),
});

module.exports = userSchema;