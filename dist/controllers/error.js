'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.badRequest = badRequest;
exports.internalServerError = internalServerError;

var _httpErrors = require('http-errors');

var _httpErrors2 = _interopRequireDefault(_httpErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function badRequest(req, res, next) {
  next((0, _httpErrors2.default)(400));
}

function internalServerError(req, res, next) {
  next((0, _httpErrors2.default)(500));
}