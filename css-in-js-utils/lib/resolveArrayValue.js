"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = resolveArrayValue;

var _hyphenateProperty = require("./hyphenateProperty");

var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function resolveArrayValue(property, value) {
  return value.join(';' + (0, _hyphenateProperty2["default"])(property) + ':');
}