'use strict';

const Controller = require('egg').Controller;

class SkillController extends Controller {
    async newInitiativeSkill() {
        const { ctx, service } = this;
        const name = ctx.request.body.name;
        const level = ctx.request.body.level;
        const type = ctx.request.body.type;
        const res = await ctx.service.skill.newInitiativeSkill(name, type, Number(level))
        ctx.body = res
    }
}

module.exports = SkillController;
