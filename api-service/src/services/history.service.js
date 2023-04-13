const { History } = require('../models');

/**
 * Create a user
 * @param {Object} history
 * @returns {Promise<User>}
 */
const createHistory = async (history) => {
  return History.create(history);
};

/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @returns {Promise<QueryResult>}
 */
const queryHistories = async (filter, options) => {
  return History.paginate(filter, options);
};

/**
 * Query for return top history
 * @returns {Promise<QueryResult>}
 */
const getTopHistories = async () => {
  const aggregatorOpts = [
    { $group: { _id: '$symbol', count: { $sum: 1 } } },
    { $limit: 5 },
    {
      $sort: { count: -1 },
    },
    { $replaceRoot: { newRoot: { stock: '$_id', times_requested: '$count' } } },
  ];
  const users = await History.aggregate(aggregatorOpts).exec();
  return users;
};

module.exports = {
  queryHistories,
  getTopHistories,
  createHistory,
};
