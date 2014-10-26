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

## Author
| [![twitter/Leohsieh0924](http://www.gravatar.com/avatar/d4e9fa87dd47c856e58ddf24f803a060.png)](https://twitter.com/Leohsieh0924 "Follow @Leohsieh0924 on Twitter") |
|---|
| [Leo Hsieh](http://leoj.net) |

## Release History

* 2014-10-25 `v1.0.0` Initial release