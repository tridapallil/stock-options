const Joi = require('joi');

const getStock = {
  query: Joi.object().keys({
    q: Joi.string().required(),
  }),
};

module.exports = {
  getStock,
};
