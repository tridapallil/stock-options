const historyService = require('./history.service');
const pick = require('../utils/pick');
const { stockIntegration } = require('../integration');

/**
 * Query for users
 * @param {Object} symbol - Symbol id
 * @returns {Promise<QueryResult>}
 */
const queryStockAndSaveHistory = async (symbol, userId) => {
  const stock = await stockIntegration.getStock(symbol);
  if (stock) {
    stock.userId = userId;
    await historyService.createHistory(stock);
  }
  return pick(stock, ['name', 'symbol', 'open', 'high', 'low', 'close']);;
};

module.exports = {
  queryStockAndSaveHistory,
};
