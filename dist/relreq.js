'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var path = require('path');

exports['default'] = function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return require(path.resolve.apply(null, Object.keys(args).map(function (key) {
    return args[key];
  })));
};

module.exports = exports['default'];