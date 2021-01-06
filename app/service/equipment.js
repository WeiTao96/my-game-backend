const Service = require('egg').Service;

class EquipmentService extends Service {
    async newEquipmentEffect(name, num, description) {
        const effect = {
            name: name,
            num: num,
            description: description
        }
        let result = this.ctx.model.EquipmentEffect.create(effect)
        return result
    }
    async getAllEquipmentEffect() {
        let result = this.ctx.model.EquipmentEffect.find({})
        return result
    }
    async createNewEquipment(name, type, level) {
        let result
        switch (type) {
            case "hat":
                result = await this.randomAHat(name, level)
                break;
            case "clothes":

                break;
            case "ring":

                break;
            case "talisman":

                break;
            case "shoes":

                break;
            case "pants":

                break;
            case "sword":

                break;
            default:
                break;
        }
        return result
    }
    async randomAHat(name, level) {
        let result
        switch (level) {
            case 0:
                const hat = {
                    name: name,
                    type: 'hat',
                    value: [
                        {
                            defense: this.Random(10, 15)
                        }
                    ],
                    effect: [],
                    level: level
                }
                result = await this.ctx.model.newEquipment.create(hat)
                break;
            case 1:

                break;
            case 2:

                break;
            case 3:

                break;
            case 4:

                break;
            default:
                break;
        }
        return result
    }
    async randomAHat(name, level) {
        let result
        switch (level) {
            case 0:

                break;
            case 1:

                break;
            case 2:

                break;
            case 3:

                break;
            case 4:

                break;
            default:
                break;
        }
        return result
    }
    Random(min, max) {
        return Math.round(Math.random() * (max - min)) + min;
    }
}

module.exports = EquipmentService;