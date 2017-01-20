'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _controllers = require('../controllers');

var _middlewares = require('../middlewares');

var router = (0, _express.Router)();

router.use('/400', _controllers.error.badRequest);
router.use('/500', _controllers.error.internalServerError);
router.use('/*', (0, _middlewares.notFound)());

exports.default = function () {
  return router;
};

module.exports = exports['default'];