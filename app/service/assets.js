const Service = require('egg').Service;

class AssetsService extends Service {
    async addNewLand() {
        const land = {
            name: '农田',
            income: 100,
            outcome: 20,
            type: 0,
            status: true,
            level: 0
        }
        const res = await this.ctx.model.Land.create(land)
        return res
    }
    async getAllLand() {
        const res = await this.ctx.model.Land.find({})
        return res
    }
}

module.exports = AssetsService;