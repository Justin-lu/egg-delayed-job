# egg-delayed-job

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-delayed-job.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-delayed-job
[travis-image]: https://img.shields.io/travis/eggjs/egg-delayed-job.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-delayed-job
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-delayed-job.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-delayed-job?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-delayed-job.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-delayed-job
[snyk-image]: https://snyk.io/test/npm/egg-delayed-job/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-delayed-job
[download-image]: https://img.shields.io/npm/dm/egg-delayed-job.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-delayed-job

类似Sidekiq的任务队列

## 依赖说明

### 依赖的 egg 版本

egg-delayed-job 版本 | egg 1.x
--- | ---
1.x | 😁
0.x | ❌

### 依赖的插件

## 开启插件

```js
// config/plugin.js
exports.delayedJob = {
  enable: true,
  package: 'egg-delayed-job',
};
```

## 使用场景

- 通常我们在做一些比较费时间的任务时，比如发邮件，导出数据，迁移数据等等，我们希望不阻断用户，但有希望有任务可以追踪到这个任务的执行状态

## 详细配置

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 单元测试

## 提问交流

请到 [egg issues](https://github.com/eggjs/egg/issues) 异步交流。

## License

[MIT](LICENSE)
