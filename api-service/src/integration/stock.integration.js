const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const api = require('../config/stock/api');

/**
 * Query for users
 * @param {Object} symbol - Symbol id
 * @returns {Promise<QueryResult>}
 */
const getStock = async (symbol) => {
  const result = await api.get(`/local/services/stocks/${symbol}`).catch(function (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Couldn't get stock");
  });
  const { data: stock } = result;
  return stock;
};

module.exports = {
  getStock,
};
