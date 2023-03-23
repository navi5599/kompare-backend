"use strict";
var Joi = require('joi');
var userSchema = Joi.object({
    Email: Joi.string().email().required(),
    Name: Joi.string().alphanum().min(3).max(30).required(),
    Surname: Joi.string().alphanum().min(3).max(30).required(),
    City: Joi.string().alphanum().min(3).max(30).required(),
    Birthday: Joi.date().required().less('now')
});
module.exports = userSchema;
