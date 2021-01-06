'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 人物路由
  require('./router/person')(app);
  require('./router/equipment')(app);
  router.get('/', controller.home.index);
};
