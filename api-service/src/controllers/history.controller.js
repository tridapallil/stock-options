const { Types } = require('mongoose');
const catchAsync = require('../utils/catchAsync');
const { historyService } = require('../services');
const pick = require('../utils/pick');

const getHistories = catchAsync(async (req, res) => {
  const filter = { userId: new Types.ObjectId(req.user._id) };
  const options = pick(req.query, ['limit', 'page']);
  options.sortBy = 'createdAt: desc';
  const result = await historyService.queryHistories(filter, options);
  res.send(result);
});

module.exports = {
  getHistories,
};
