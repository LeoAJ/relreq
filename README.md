# Relreq

[![Travis](https://img.shields.io/travis/LeoAJ/relreq.svg?style=flat-square)](https://travis-ci.org/LeoAJ/relreq)
[![npm](https://img.shields.io/npm/v/relreq.svg?style=flat-square)](https://www.npmjs.com/package/relreq)
[![David](https://img.shields.io/david/dev/LeoAJ/relreq.svg?style=flat-square)](https://david-dm.org/LeoAJ/relreq#info=devDependencies)
[![Coveralls](https://img.shields.io/coveralls/LeoAJ/relreq.svg?style=flat-square)](https://coveralls.io/github/LeoAJ/relreq?branch=master)
[![npm](https://img.shields.io/npm/l/express.svg?style=flat-square)](https://github.com/LeoAJ/relreq/blob/master/LICENSE)

wrap node `require` with relative path

## Installation

```js
npm install relreq
```

## Usage

before

```js
var yourModule = require(path.resolve('a/b/c/d/e'));
```

now

```js
var relreq = require('relreq'),
    yourModule = relreq('a/b/c/d/e');
```

## Build

```js
npm start
```

## Tests

```js
npm test
```

## Coverage

```js
npm run cover
```

## License
MIT

## Release History

* 2015-08-12 `v1.0.6` Add unit testing, code coverage and remove gulp
* 2015-07-01 `v1.0.5` Fix package.json
* 2015-05-13 `v1.0.4` Refactor with ES6
* 2014-11-06 `v1.0.3` Support multiple input parameters
* 2014-10-25 `v1.0.0` Initial release

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/LeoAJ/relreq/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
