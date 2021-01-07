module.exports = app => {
    const { router, controller } = app;
    router.post('/api/equipment/new', controller.equipment.newEquipment);
    router.post('/api/equipment/effect/new', controller.equipment.newEffect);
    router.get('/api/equipment/effect/all', controller.equipment.getEffect);
};