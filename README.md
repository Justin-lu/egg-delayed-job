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

A priority job queue backed by redis, built for eggjs.

## Install

```bash
$ npm i egg-delayed-job --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.delayedJob = {
  enable: true,
  package: 'egg-delayed-job',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
'use strict';
exports.delayedJob = {
  client: {
    queuePrefix: 'q',
    redis: {
      port: 6379,
      host: '127.0.0.1',
      auth: '',
      db: 3,
      // see https://github.com/mranney/node_redis#rediscreateclient
      options: {
      },
    },
  },
  // clients: {}
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

```js
app.delayedJob.process('email', (job, done) => {
  // send email for this;
  email(job.data.to, done);
});

app.delayedJob.create('email', {
    title: 'welcome email for justin'
  , to: 'gdjyluxiaoyong@gmail.com'
  , template: 'welcome-email'
}).save();
```

form more config please see [here](https://github.com/Automattic/kue)

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
