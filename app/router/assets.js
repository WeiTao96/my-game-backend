module.exports = app => {
    const { router, controller } = app;
    router.get('/api/assets/land/new', controller.assets.newLand);
    router.get('/api/assets/land/all', controller.assets.getAllLand);
    router.get('/api/assets/land/rent/:id', controller.assets.handleRent);
    router.get('/api/assets/land/recover/:id', controller.assets.handleRecover);
    router.delete('/api/assets/land/:id', controller.assets.handleSell);
};