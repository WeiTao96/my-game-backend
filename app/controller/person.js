'use strict';

const Controller = require('egg').Controller;

class PersonController extends Controller {
    async new() {
        const { ctx, service } = this;
        const query = ctx.query
        const res = await ctx.service.person.randOne(query.level || "low")
        ctx.body = res
    }
    async getAllPerson() {
        const res = await this.ctx.service.person.getAllPerson()
        this.ctx.body = res
    }
}

module.exports = PersonController;
