'use strict';

/**
 * egg-delayed-job default config
 * @member Config#delayedJob
 * @property {String} SOME_KEY - some description
 */
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
