module.exports = app => {
    const { router, controller } = app;
    router.get('/api/person/new', controller.person.new);
    router.get('/api/person/all', controller.person.getAllPerson);
    router.post('/api/person/update/:id', controller.person.update);
};