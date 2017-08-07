var Joi = require('joi');

var categoryBody = {
  name: Joi.string().min(2).required()
};

var postBody = {
    authors_id: Joi.number().min(1).max(80).required(),
    title: Joi.string().min(3).max(80).required(),
    authors: Joi.string().min(3).max(80).required(),
    date: Joi.date().required(),
};

module.exports = {
  category: {
    body: categoryBody
  },
  post: {
    body: postBody
  },
};
