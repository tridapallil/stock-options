const express = require('express');
const authRoute = require('./auth.route');
const docsRoute = require('./docs.route');
const stockRoute = require('./stock.route');
const historyRoute = require('./history.route');
const statsRoute = require('./stats.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/stock',
    route: stockRoute,
  },
  {
    path: '/stats',
    route: statsRoute,
  },
  {
    path: '/history',
    route: historyRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
