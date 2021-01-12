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
    async updateBuild(id, buildName) {
        let res
        let update
        switch (buildName) {
            case 'hospital':
                update = {
                    name: '医馆（一级）',
                    income: 2000,
                    s_type: 2,   // 2 为医馆
                    type: 1,
                    level: 1
                }
                res = await this.handleLandUpdate(id, update)
                break;
            case 'bar':
                update = {
                    name: '酒馆（一级）',
                    income: 1500,
                    s_type: 3,   // 3 为酒馆
                    type: 1,
                    level: 1
                }
                res = await this.handleLandUpdate(id, update)
                break;
            case 'gym':
                update = {
                    name: '练功房（一级）',
                    income: 0,
                    outcome: 1000,
                    s_type: 4,   // 1 为练功房
                    type: 2,
                    level: 1
                }
                res = await this.handleLandUpdate(id, update)
                break;
            case 'smithy':
                update = {
                    name: '铁匠铺',
                    outcome: 500,
                    s_type: 5,   // 2 为铁匠铺
                    type: 2,
                    level: 1
                }
                res = await this.handleLandUpdate(id, update)
                break;
            default:
                break;
        }
        return res
    }
    async handleLandUpdate(id, update) {
        const res = await this.ctx.model.Land.findByIdAndUpdate(id, update)
        return res
    }
    async handleLandDelete(id) {
        const res = await this.ctx.model.Land.findByIdAndDelete(id)
        return res
    }
    async getAllLand() {
        const res = await this.ctx.model.Land.find({})
        return res
    }
}

module.exports = AssetsService;