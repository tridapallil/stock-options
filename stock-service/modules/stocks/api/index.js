const axios = require('axios');

const api = axios.create({
  baseURL: 'https://stooq.com/q/l/?f=sd2t2ohlcvn&h&e=json',
});

api.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
  };
  return config;
});

module.exports = api;
