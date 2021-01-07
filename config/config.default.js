/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1609744937207_1570';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.mongoose = {
    url: 'mongodb://192.168.100.7:27017/game',
    options: {
      auth: { authSource: "game" },
      user: 'gameAdmin',
      pass: '123456'
    },
    // mongoose global plugins, expected a function or an array of function and options
    // plugins: [createdPlugin, [updatedPlugin, pluginOptions]],
  }

  config.security = {
    csrf: {
      enable: false
    },
    domainWhiteList: ['http://localhost:8080'],
  }

  return {
    ...config,
    ...userConfig,
  };
};
