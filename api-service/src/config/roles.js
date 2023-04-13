const allRoles = {
  user: ['getStocks', 'getHistories'],
  admin: ['getStocks', 'getStats'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
