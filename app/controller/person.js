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
    async update() {
        const id = this.ctx.params.id;
        const update = this.ctx.request.body;
        const res = await this.ctx.service.person.update(id, update)
        this.ctx.body = res
    }
    async remove() {
        const id = this.ctx.params.id;
        const res = await this.ctx.service.person.remove(id)
        this.ctx.body = res
    }
}

module.exports = PersonController;
