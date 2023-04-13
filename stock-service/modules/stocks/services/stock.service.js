const api = require('../api');

const getStock = async (symbol) => {
  const result = await api
    .get('', {
      params: {
        s: symbol.toLowerCase(),
      },
    })
    .catch((err) => {
      throw err;
    });
  const { data } = result;
  const stock = data.symbols[0];
  return stock;
};

module.exports = {
  getStock,
};
