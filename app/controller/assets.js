'use strict';

const Controller = require('egg').Controller;

class AssetsController extends Controller {
    async newLand() {
        const res = await this.ctx.service.assets.addNewLand()
        this.ctx.body = res
    }
    async getAllLand() {
        const res = await this.ctx.service.assets.getAllLand()
        this.ctx.body = res
    }
    async handleRent() {
        const id = this.ctx.params.id;
        const update = {
            name: '农田',
            income: 1000,
            s_type: 1,   // 1 为农田
            type: 1
        }
        const res = await this.ctx.service.assets.handleLandUpdate(id, update)
        this.ctx.body = res
    }
    async handleRecover() {
        const id = this.ctx.params.id;
        const update = {
            name: '荒地',
            income: 0,
            outcome: 0,
            type: 0,
        }
        const res = await this.ctx.service.assets.handleLandUpdate(id, update)
        this.ctx.body = res
    }

    async handleSell() {
        const id = this.ctx.params.id;
        const res = await this.ctx.service.assets.handleLandDelete(id)
        this.ctx.body = res
    }
}

module.exports = AssetsController;