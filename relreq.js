'use strict';

var path = require('path');

module.exports = function (relativePath) {
  return require(path.resolve(relativePath));
};