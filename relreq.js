'use strict';

var path = require('path');

module.exports = function () {

  var key, args = [];

  for (key in arguments) {
    if (arguments.hasOwnProperty(key)) {
      args.push(arguments[key]);
    }
  }

  return require(path.resolve.apply(null, args));
};