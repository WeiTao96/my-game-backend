'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 人物路由
  require('./router/person')(app);
  require('./router/equipment')(app);
  require('./router/skill')(app);
  require('./router/assets')(app);
  router.get('/', controller.home.index);
};
