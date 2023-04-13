const catchAsync = require('../utils/catchAsync');
const { historyService } = require('../services');

const getStats = catchAsync(async (req, res) => {
  const result = await historyService.getTopHistories();
  res.send(result);
});

module.exports = {
  getStats,
};
