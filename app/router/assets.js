module.exports = app => {
    const { router, controller } = app;
    router.get('/api/assets/land/new', controller.assets.newLand);
    router.get('/api/assets/land/all', controller.assets.getAllLand);

};