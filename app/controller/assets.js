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
}

module.exports = AssetsController;