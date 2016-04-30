'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _chai = require('chai');

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isArray = Array.isArray || function (array) {
  return Object.prototype.toString.call(array) === '[object Array]';
};

describe('Testing for relreq module: ', function () {

  var module = void 0;

  beforeEach(function () {
    module = (0, _index2.default)('test/module/a//b/c/module');
  });

  it('module.number is a number', function () {
    (0, _chai.expect)(_typeof(module.number)).to.equal('number');
  });

  it('module.string is a string', function () {
    (0, _chai.expect)(_typeof(module.string)).to.equal('string');
  });

  it('module.fn is a function', function () {
    (0, _chai.expect)(_typeof(module.fn)).to.equal('function');
  });

  it('module.obj is a object', function () {
    (0, _chai.expect)(_typeof(module.obj)).to.equal('object');
  });

  it('module.array is a array', function () {
    (0, _chai.expect)(isArray(module.array)).to.equal(true);
  });
});