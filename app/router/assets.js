module.exports = app => {
    const { router, controller } = app;
    router.get('/api/assets/land/new', controller.assets.newLand);
    router.get('/api/assets/land/all', controller.assets.getAllLand);
    router.get('/api/assets/land/rent/:id', controller.assets.handleLandRent);
    router.get('/api/assets/land/recover/:id', controller.assets.handleLandRecover);
    router.delete('/api/assets/land/:id', controller.assets.handleLandSell);
    router.get('/api/assets/land/build/:id', controller.assets.handleUpdateBuild);

};