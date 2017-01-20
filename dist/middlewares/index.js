'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notFound = exports.errorHandler = undefined;

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _methodOverride = require('method-override');

var _methodOverride2 = _interopRequireDefault(_methodOverride);

var _composeMiddleware = require('compose-middleware');

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _errorhandler = require('./errorhandler');

var _errorhandler2 = _interopRequireDefault(_errorhandler);

var _notfound = require('./notfound');

var _notfound2 = _interopRequireDefault(_notfound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middlewares = [(0, _morgan2.default)('dev'), (0, _compression2.default)(), _bodyParser2.default.urlencoded({ extended: false }), _bodyParser2.default.json(), (0, _cookieParser2.default)(), (0, _cors2.default)(), (0, _helmet2.default)(), (0, _methodOverride2.default)()];

if (_config2.default.env === 'test') middlewares.shift();

exports.errorHandler = _errorhandler2.default;
exports.notFound = _notfound2.default;

exports.default = function () {
  return (0, _composeMiddleware.compose)(middlewares);
};