# Relreq

[![Build Status](https://travis-ci.org/LeoAJ/relreq.svg)](https://travis-ci.org/LeoAJ/relreq)
[![NPM version](https://badge.fury.io/js/relreq.svg)](http://badge.fury.io/js/relreq) [![devDependency Status](https://david-dm.org/LeoAJ/relreq/dev-status.svg)](https://david-dm.org/LeoAJ/relreq#info=devDependencies)
[![Coverage Status](https://coveralls.io/repos/LeoAJ/relreq/badge.svg?branch=master&service=github)](https://coveralls.io/github/LeoAJ/relreq?branch=master)

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
