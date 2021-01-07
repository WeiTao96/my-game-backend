module.exports = app => {
    const { router, controller } = app;
    router.post('/api/skill/initiative/new', controller.skill.newInitiativeSkill);
};