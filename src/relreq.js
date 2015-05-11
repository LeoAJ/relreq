const path = require('path');

export default function () {
  return require(path.resolve.apply(...arguments));
};