const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { stockService } = require('../services');

const getStock = catchAsync(async (req, res) => {
  const { q: symbol } = pick(req.query, ['q']);
  const userId = req.user._id;
  const result = await stockService.queryStockAndSaveHistory(symbol, userId);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Stock not found');
  }
  res.send(result);
});

module.exports = {
  getStock,
};
