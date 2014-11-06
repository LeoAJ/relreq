# Relreq [![NPM version](https://badge.fury.io/js/relreq.svg)](http://badge.fury.io/js/relreq)

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

## License
MIT

## Release History

* 2014-10-25 `v1.0.0` Initial release
* 2014-11-06 `v1.0.3` Support multiple input parameters