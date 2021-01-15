'use strict';

const Controller = require('egg').Controller;

class EquipmentController extends Controller {
    async newEffect() {
        const { ctx, service } = this;
        const name = ctx.request.body.name;
        const description = ctx.request.body.description;
        const type = ctx.request.body.type;
        const res = await ctx.service.equipment.newEquipmentEffect(name, description, type)
        ctx.body = res
    }
    async newEquipment() {
        const { ctx, service } = this;
        const name = ctx.request.body.name;
        const level = ctx.request.body.level;
        const type = ctx.request.body.type;
        const res = await ctx.service.equipment.createNewEquipment(name, type, Number(level))
        ctx.body = res
    }
    async getEffect() {
        const res = await this.ctx.service.equipment.getAllEquipmentEffect()
        this.ctx.body = res
    }

    async getAllEquipment() {
        const res = await this.ctx.service.equipment.getAllEquipment()
        this.ctx.body = res
    }
}

module.exports = EquipmentController;
