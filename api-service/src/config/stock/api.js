const axios = require('axios');

const api = axios.create({
  baseURL: process.env.SERVERLESS_URL,
});

module.exports = api;
