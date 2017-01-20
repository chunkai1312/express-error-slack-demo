'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

var _winstonDailyRotateFile = require('winston-daily-rotate-file');

var _winstonDailyRotateFile2 = _interopRequireDefault(_winstonDailyRotateFile);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = new _winston2.default.Logger({
  transports: _config2.default.env === 'development' ? [new _winston2.default.transports.Console({
    level: 'debug',
    colorize: true,
    prettyPrint: true,
    handleExceptions: true
  })] : [new _winston2.default.transports.Console({
    level: 'verbose',
    colorize: true,
    prettyPrint: true,
    handleExceptions: true
  }), new _winstonDailyRotateFile2.default({
    name: 'log-file',
    level: 'info',
    json: true,
    filename: _path2.default.join(_config2.default.root, 'logs', 'log'),
    datePattern: '-yyyyMMdd.log'
  }), new _winstonDailyRotateFile2.default({
    name: 'error-file',
    level: 'error',
    json: true,
    handleExceptions: true,
    filename: _path2.default.join(_config2.default.root, 'logs', 'error'),
    datePattern: '-yyyyMMdd.log'
  })],
  exitOnError: false
});

exports.default = logger;
module.exports = exports['default'];