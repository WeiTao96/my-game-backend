'use strict';

const Controller = require('egg').Controller;

class EquipmentController extends Controller {
    async newEffect() {
        const { ctx, service } = this;
        const name = ctx.request.body.name;
        const num = ctx.request.body.num;
        const description = ctx.request.body.description;
        const res = await ctx.service.equipment.newEquipmentEffect(name, num, description)
        ctx.body = res
    }
    async getEffect() {
        const res = await this.ctx.service.equipment.getAllEquipmentEffect()
        this.ctx.body = res
    }
}

module.exports = EquipmentController;
