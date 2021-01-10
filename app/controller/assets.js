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
            income: 100,
            s_type: 1,   // 1 为农田
            type: 1
        }
        const res = await this.ctx.service.assets.handleLandUpdate(id, update)
        this.ctx.body = res
    }
}

module.exports = AssetsController;