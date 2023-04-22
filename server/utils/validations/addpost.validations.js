const Joi = require('joi');
const addPostSchema = Joi.object({
  content: Joi.string().min(3).max(300).required(),
  imgUrl: Joi.string(),
  userId: Joi.number().required(),
});

module.exports = {addPostSchema};
