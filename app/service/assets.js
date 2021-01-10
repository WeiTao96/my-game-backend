const Service = require('egg').Service;

class AssetsService extends Service {
    async addNewLand() {
        const land = {
            name: '荒地',
            income: 0,
            outcome: 0,
            type: 0,
            status: true,
            level: 0
        }
        const res = await this.ctx.model.Land.create(land)
        return res
    }
    async handleLandUpdate(id, update) {
        const res = await this.ctx.model.Land.findByIdAndUpdate(id, update)
        return res
    }
    async getAllLand() {
        const res = await this.ctx.model.Land.find({})
        return res
    }
}

module.exports = AssetsService;