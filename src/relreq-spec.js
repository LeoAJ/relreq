import { expect } from 'chai';
import relreq from '../index';

let isArray = Array.isArray || (array => {
  return Object.prototype.toString.call(array) === '[object Array]';
});

describe('Testing for relreq module: ', () => {

  let module;

  beforeEach(() => {
    module = relreq('test/module/a//b/c/module');
  });

  it('module.number is a number', () => {
    expect(typeof module.number).to.equal('number');
  });

  it('module.string is a string', () => {
    expect(typeof module.string).to.equal('string');
  });

  it('module.fn is a function', () => {
    expect(typeof module.fn).to.equal('function');
  });

  it('module.obj is a object', () => {
    expect(typeof module.obj).to.equal('object');
  });

  it('module.array is a array', () => {
    expect(isArray(module.array)).to.equal(true);
  });

});
