'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _apiErrorHandler = require('api-error-handler');

var _apiErrorHandler2 = _interopRequireDefault(_apiErrorHandler);

var _expressErrorSlack = require('express-error-slack');

var _expressErrorSlack2 = _interopRequireDefault(_expressErrorSlack);

var _composeMiddleware = require('compose-middleware');

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handlers = [(0, _expressErrorSlack2.default)(_config2.default.slack), (0, _apiErrorHandler2.default)()];

exports.default = function () {
  return (0, _composeMiddleware.errors)(handlers);
};

module.exports = exports['default'];