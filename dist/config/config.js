'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  root: _path2.default.normalize(__dirname + '/../..'),

  slack: {
    webhookUri: process.env.SLACK_WEBHOOK_URI || 'https://hooks.slack.com/services/TOKEN'
  }
};
module.exports = exports['default'];