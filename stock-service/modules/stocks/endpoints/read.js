const response = require('../../../shared/lib/response');
const { stockService } = require('../services');

module.exports.list = async (event, context, callback) => {
  try {
    const { symbol } = event.pathParameters;
    const stock = await stockService.getStock(symbol);
    response.json(callback, stock);
  } catch (error) {
    response.json(callback, error, 500);
  }
};
