'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _index = require('./routers/index');

var _index2 = _interopRequireDefault(_index);

var _config = require('./config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _koa2.default();

//配置静态资源
app.use((0, _koaStatic2.default)(_config2.default.get('staticDir')));

app.use(_index2.default.routes(), _index2.default.allowedMethods());

app.listen(_config2.default.get('port'), function () {
    console.log('website is starting at port ' + _config2.default.get('port'));
});