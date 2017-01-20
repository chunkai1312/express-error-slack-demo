'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _development = require('./env/development');

var _development2 = _interopRequireDefault(_development);

var _test = require('./env/test');

var _test2 = _interopRequireDefault(_test);

var _staging = require('./env/staging');

var _staging2 = _interopRequireDefault(_staging);

var _production = require('./env/production');

var _production2 = _interopRequireDefault(_production);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  development: (0, _lodash.merge)({}, _config2.default, _development2.default),
  test: (0, _lodash.merge)({}, _config2.default, _test2.default),
  staging: (0, _lodash.merge)({}, _config2.default, _staging2.default),
  production: (0, _lodash.merge)({}, _config2.default, _production2.default)
}[process.env.NODE_ENV || 'development'];
module.exports = exports['default'];