const path = require('path');

export default function (...args) {
  return require(path.resolve.apply(null, Object.keys(args).map((key) => args[key])));
}