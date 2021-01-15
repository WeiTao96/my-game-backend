const Service = require('egg').Service;

class EquipmentService extends Service {
    async newEquipmentEffect(name, description, type) {
        const effect = {
            name: name,
            num: 0,
            description: description,
            type: type
        }
        let item = await this.ctx.model.EquipmentEffect.findOne({}).sort({ num: -1 })
        let bigNum = item.num + 1
        effect.num = bigNum
        let result = this.ctx.model.EquipmentEffect.create(effect)
        return result
    }
    async getAllEquipmentEffect() {
        let result = this.ctx.model.EquipmentEffect.find({}).sort({ num: 1 })
        return result
    }
    async getAllEquipment() {
        let result = this.ctx.model.Equipment.find({})
        return result
    }
    async createNewEquipment(name, type, level) {
        let result
        switch (type) {
            case "hat":
                result = await this.randomAHat(name, level)
                break;
            case "clothes":
                result = await this.randomClothes(name, level)
                break;
            case "ring":
                result = await this.randomARing(name, level)
                break;
            case "talisman":
                result = await this.randomATalisman(name, level)
                break;
            case "shoes":
                result = await this.randomShoes(name, level)
                break;
            case "pants":
                result = await this.randomPants(name, level)
                break;
            case "sword":
                result = await this.randomASword(name, level)
                break;
            default:
                break;
        }
        return result
    }
    async randomAHat(name, level) {
        let result
        let hat
        let nums
        const effect = await this.ctx.model.EquipmentEffect.find({ type: 1 })
        switch (level) {
            case 0:
                hat = {
                    name: name,
                    type: 'hat',
                    value: [
                        {
                            label: 'defense', value: this.Random(10, 15)
                        }
                    ],
                    effect: [],
                    level: level
                }
                result = await this.ctx.model.Equipment.create(hat)
                break;
            case 1:
                let num = this.Random(1, effect.length - 1)
                hat = {
                    name: name,
                    type: 'hat',
                    value: [
                        {
                            label: 'defense', value: this.Random(15, 20)
                        }
                    ],
                    effect: [],
                    level: level
                }
                hat.effect.push(effect[num])
                result = await this.ctx.model.Equipment.create(hat)
                break;
            case 2:
                hat = {
                    name: name,
                    type: 'hat',
                    value: [
                        {
                            label: 'defense', value: this.Random(20, 25)
                        }
                    ],
                    effect: [],
                    level: level
                }
                nums = []
                while (nums.length < 2) {
                    let num = this.Random(1, effect.length - 1)
                    if (!nums.includes(num)) {
                        nums.push(num)
                    }
                }
                for (const iterator of nums) {
                    hat.effect.push(effect[iterator])
                }
                result = await this.ctx.model.Equipment.create(hat)
                break;
            case 3:
                hat = {
                    name: name,
                    type: 'hat',
                    value: [
                        {
                            label: 'defense', value: this.Random(25, 30)
                        }
                    ],
                    effect: [],
                    level: level
                }
                nums = []
                while (nums.length < 3) {
                    let num = this.Random(1, effect.length - 1)
                    if (!nums.includes(num)) {
                        nums.push(num)
                    }
                }
                for (const iterator of nums) {
                    hat.effect.push(effect[iterator])
                }
                result = await this.ctx.model.Equipment.create(hat)
                break;
            case 4:
                hat = {
                    name: name,
                    type: 'hat',
                    value: [
                        {
                            label: 'defense', value: this.Random(30, 35)
                        }
                    ],
                    effect: [],
                    level: level
                }
                nums = []
                while (nums.length < 4) {
                    let num = this.Random(1, effect.length - 1)
                    if (!nums.includes(num)) {
                        nums.push(num)
                    }
                }
                for (const iterator of nums) {
                    hat.effect.push(effect[iterator])
                }
                result = await this.ctx.model.Equipment.create(hat)
                break;
            default:
                break;
        }
        return result
    }
    async randomClothes(name, level) {
        let result
        let clothes
        let nums
        const effect = await this.ctx.model.EquipmentEffect.find({ type: 1 })
        switch (level) {
            case 0:
                clothes = {
                    name: name,
                    type: 'clothes',
                    value: [
                        {
                            label: 'defense', value: this.Random(45, 50)
                        }
                    ],
                    effect: [],
                    level: level
                }
                result = await this.ctx.model.Equipment.create(clothes)
                break;
            case 1:
                let num = this.Random(1, effect.length - 1)
                clothes = {
                    name: name,
                    type: 'clothes',
                    value: [
                        {
                            label: 'defense', value: this.Random(50, 60)
                        }
                    ],
                    effect: [],
                    level: level
                }
                clothes.effect.push(effect[num])
                result = await this.ctx.model.Equipment.create(clothes)
                break;
            case 2:
                clothes = {
                    name: name,
                    type: 'clothes',
                    value: [
                        {
                            label: 'defense', value: this.Random(60, 70)
                        }
                    ],
                    effect: [],
                    level: level
                }
                nums = []
                while (nums.length < 2) {
                    let num = this.Random(1, effect.length - 1)
                    if (!nums.includes(num)) {
                        nums.push(num)
                    }
                }
                for (const iterator of nums) {
                    clothes.effect.push(effect[iterator])
                }
                result = await this.ctx.model.Equipment.create(clothes)
                break;
            case 3:
                clothes = {
                    name: name,
                    type: 'clothes',
                    value: [
                        {
                            label: 'defense', value: this.Random(70, 80)
                        }
                    ],
                    effect: [],
                    level: level
                }
                nums = []
                while (nums.length < 3) {
                    let num = this.Random(1, effect.length - 1)
                    if (!nums.includes(num)) {
                        nums.push(num)
                    }
                }
                for (const iterator of nums) {
                    clothes.effect.push(effect[iterator])
                }
                result = await this.ctx.model.Equipment.create(clothes)
                break;
            case 4:
                clothes = {
                    name: name,
                    type: 'clothes',
                    value: [
                        {
                            label: 'defense', value: this.Random(80, 100)
                        }
                    ],
                    effect: [],
                    level: level
                }
                nums = []
                while (nums.length < 4) {
                    let num = this.Random(1, effect.length - 1)
                    if (!nums.includes(num)) {
                        nums.push(num)
                    }
                }
                for (const iterator of nums) {
                    clothes.effect.push(effect[iterator])
                }
                result = await this.ctx.model.Equipment.create(clothes)
                break;
            default:
                break;
        }
        return result
    }
    async randomPants(name, level) {
        let result
        let pants
        let nums
        const effect = await this.ctx.model.EquipmentEffect.find({ type: 1 })
        switch (level) {
            case 0:
                pants = {
                    name: name,
                    type: 'pants',
                    value: [
                        {
                            label: 'defense', value: this.Random(20, 25)
                        }
                    ],
                    effect: [],
                    level: level
                }
                result = await this.ctx.model.Equipment.create(pants)
                break;
            case 1:
                let num = this.Random(1, effect.length - 1)
                pants = {
                    name: name,
                    type: 'pants',
                    value: [
                        {
                            label: 'defense', value: this.Random(25, 30)
                        }
                    ],
                    effect: [],
                    level: level
                }
                pants.effect.push(effect[num])
                result = await this.ctx.model.Equipment.create(pants)
                break;
            case 2:
                pants = {
                    name: name,
                    type: 'pants',
                    value: [
                        {
                            label: 'defense', value: this.Random(30, 50)
                        }
                    ],
                    effect: [],
                    level: level
                }
                nums = []
                while (nums.length < 2) {
                    let num = this.Random(1, effect.length - 1)
                    if (!nums.includes(num)) {
                        nums.push(num)
                    }
                }
                for (const iterator of nums) {
                    pants.effect.push(effect[iterator])
                }
                result = await this.ctx.model.Equipment.create(pants)
                break;
            case 3:
                pants = {
                    name: name,
                    type: 'pants',
                    value: [
                        {
                            label: 'defense', value: this.Random(50, 60)
                        }
                    ],
                    effect: [],
                    level: level
                }
                nums = []
                while (nums.length < 3) {
                    let num = this.Random(1, effect.length - 1)
                    if (!nums.includes(num)) {
                        nums.push(num)
                    }
                }
                for (const iterator of nums) {
                    pants.effect.push(effect[iterator])
                }
                result = await this.ctx.model.Equipment.create(pants)
                break;
            case 4:
                pants = {
                    name: name,
                    type: 'pants',
                    value: [
                        {
                            label: 'defense', value: this.Random(60, 80)
                        }
                    ],
                    effect: [],
                    level: level
                }
                nums = []
                while (nums.length < 4) {
                    let num = this.Random(1, effect.length - 1)
                    if (!nums.includes(num)) {
                        nums.push(num)
                    }
                }
                for (const iterator of nums) {
                    pants.effect.push(effect[iterator])
                }
                result = await this.ctx.model.Equipment.create(pants)
                break;
            default:
                break;
        }
        return result
    }
    async randomARing(name, level) {
        let result
        let ring
        let nums
        const effect = await this.ctx.model.EquipmentEffect.find({ type: 1 })
        switch (level) {
            case 0:
                ring = {
                    name: name,
                    type: 'ring',
                    value: [
                        {
                            label: 'HP', value: this.Random(200, 500)
                        }
                    ],
                    effect: [],
                    level: level
                }
                result = await this.ctx.model.Equipment.create(ring)
                break;
            case 1:
                let num = this.Random(1, effect.length - 1)
                ring = {
                    name: name,
                    type: 'ring',
                    value: [
                        {
                            label: 'HP', value: this.Random(500, 800)
                        }
                    ],
                    effect: [],
                    level: level
                }
                ring.effect.push(effect[num])
                result = await this.ctx.model.Equipment.create(ring)
                break;
            case 2:
                ring = {
                    name: name,
                    type: 'ring',
                    value: [
                        {
                            label: 'HP', value: this.Random(800, 1000)
                        }
                    ],
                    effect: [],
                    level: level
                }
                nums = []
                while (nums.length < 2) {
                    let num = this.Random(1, effect.length - 1)
                    if (!nums.includes(num)) {
                        nums.push(num)
                    }
                }
                for (const iterator of nums) {
                    ring.effect.push(effect[iterator])
                }
                result = await this.ctx.model.Equipment.create(ring)
                break;
            case 3:
                ring = {
                    name: name,
                    type: 'ring',
                    value: [
                        {
                            label: 'HP', value: this.Random(1000, 1200)
                        }
                    ],
                    effect: [],
                    level: level
                }
                nums = []
                while (nums.length < 3) {
                    let num = this.Random(1, effect.length - 1)
                    if (!nums.includes(num)) {
                        nums.push(num)
                    }
                }
                for (const iterator of nums) {
                    ring.effect.push(effect[iterator])
                }
                result = await this.ctx.model.Equipment.create(ring)
                break;
            case 4:
                ring = {
                    name: name,
                    type: 'ring',
                    value: [
                        {
                            label: 'HP', value: this.Random(1200, 1500)
                        }
                    ],
                    effect: [],
                    level: level
                }
                nums = []
                while (nums.length < 4) {
                    let num = this.Random(1, effect.length - 1)
                    if (!nums.includes(num)) {
                        nums.push(num)
                    }
                }
                for (const iterator of nums) {
                    ring.effect.push(effect[iterator])
                }
                result = await this.ctx.model.Equipment.create(ring)
                break;
            default:
                break;
        }
        return result
    }
    async randomATalisman(name, level) {
        let result
        let talisman
        let nums
        const effect = await this.ctx.model.EquipmentEffect.find({ type: 2 })
        switch (level) {
            case 0:
                talisman = {
                    name: name,
                    type: 'talisman',
                    value: [
                        {
                            label: 'speed', value: this.Random(5, 10)
                        }
                    ],
                    effect: [],
                    level: level
                }
                result = await this.ctx.model.Equipment.create(talisman)
                break;
            case 1:
                let num = this.Random(1, effect.length - 1)
                talisman = {
                    name: name,
                    type: 'talisman',
                    value: [
                        {
                            label: 'speed', value: this.Random(10, 15)
                        }
                    ],
                    effect: [],
                    level: level
                }
                talisman.effect.push(effect[num])
                result = await this.ctx.model.Equipment.create(talisman)
                break;
            case 2:
                talisman = {
                    name: name,
                    type: 'talisman',
                    value: [
                        {
                            label: 'speed', value: this.Random(15, 20)
                        }
                    ],
                    effect: [],
                    level: level
                }
                nums = []
                while (nums.length < 2) {
                    let num = this.Random(1, effect.length - 1)
                    if (!nums.includes(num)) {
                        nums.push(num)
                    }
                }
                for (const iterator of nums) {
                    talisman.effect.push(effect[iterator])
                }
                result = await this.ctx.model.Equipment.create(talisman)
                break;
            case 3:
                talisman = {
                    name: name,
                    type: 'talisman',
                    value: [
                        {
                            label: 'speed', value: this.Random(20, 25)
                        }
                    ],
                    effect: [],
                    level: level
                }
                nums = []
                while (nums.length < 3) {
                    let num = this.Random(1, effect.length - 1)
                    if (!nums.includes(num)) {
                        nums.push(num)
                    }
                }
                for (const iterator of nums) {
                    talisman.effect.push(effect[iterator])
                }
                result = await this.ctx.model.Equipment.create(talisman)
                break;
            case 4:
                talisman = {
                    name: name,
                    type: 'talisman',
                    value: [
                        {
                            label: 'speed', value: this.Random(25, 35)
                        }
                    ],
                    effect: [],
                    level: level
                }
                nums = []
                while (nums.length < 4) {
                    let num = this.Random(1, effect.length - 1)
                    if (!nums.includes(num)) {
                        nums.push(num)
                    }
                }
                for (const iterator of nums) {
                    talisman.effect.push(effect[iterator])
                }
                result = await this.ctx.model.Equipment.create(talisman)
                break;
            default:
                break;
        }
        return result
    }
    async randomShoes(name, level) {
        let result
        let shoes
        let nums
        const effect = await this.ctx.model.EquipmentEffect.find({ type: 2 })
        switch (level) {
            case 0:
                shoes = {
                    name: name,
                    type: 'shoes',
                    value: [
                        {
                            label: 'speed', value: this.Random(5, 10)
                        }
                    ],
                    effect: [],
                    level: level
                }
                result = await this.ctx.model.Equipment.create(shoes)
                break;
            case 1:
                let num = this.Random(1, effect.length - 1)
                shoes = {
                    name: name,
                    type: 'shoes',
                    value: [
                        {
                            label: 'speed', value: this.Random(10, 15)
                        }
                    ],
                    effect: [],
                    level: level
                }
                shoes.effect.push(effect[num])
                result = await this.ctx.model.Equipment.create(shoes)
                break;
            case 2:
                shoes = {
                    name: name,
                    type: 'shoes',
                    value: [
                        {
                            label: 'speed', value: this.Random(15, 20)
                        }
                    ],
                    effect: [],
                    level: level
                }
                nums = []
                while (nums.length < 2) {
                    let num = this.Random(1, effect.length - 1)
                    if (!nums.includes(num)) {
                        nums.push(num)
                    }
                }
                for (const iterator of nums) {
                    shoes.effect.push(effect[iterator])
                }
                result = await this.ctx.model.Equipment.create(shoes)
                break;
            case 3:
                shoes = {
                    name: name,
                    type: 'shoes',
                    value: [
                        {
                            label: 'speed', value: this.Random(20, 25)
                        }
                    ],
                    effect: [],
                    level: level
                }
                nums = []
                while (nums.length < 3) {
                    let num = this.Random(1, effect.length - 1)
                    if (!nums.includes(num)) {
                        nums.push(num)
                    }
                }
                for (const iterator of nums) {
                    shoes.effect.push(effect[iterator])
                }
                result = await this.ctx.model.Equipment.create(shoes)
                break;
            case 4:
                shoes = {
                    name: name,
                    type: 'shoes',
                    value: [
                        {
                            label: 'speed', value: this.Random(25, 35)
                        }
                    ],
                    effect: [],
                    level: level
                }
                nums = []
                while (nums.length < 4) {
                    let num = this.Random(1, effect.length - 1)
                    if (!nums.includes(num)) {
                        nums.push(num)
                    }
                }
                for (const iterator of nums) {
                    shoes.effect.push(effect[iterator])
                }
                result = await this.ctx.model.Equipment.create(shoes)
                break;
            default:
                break;
        }
        return result
    }
    async randomASword(name, level) {
        let result
        let sword
        let nums
        const effect = await this.ctx.model.EquipmentEffect.find({ type: 0 })
        switch (level) {
            case 0:
                sword = {
                    name: name,
                    type: 'sword',
                    value: [
                        {
                            label: 'power', value: this.Random(60, 100)
                        }
                    ],
                    effect: [],
                    level: level
                }
                result = await this.ctx.model.Equipment.create(sword)
                break;
            case 1:
                let num = this.Random(1, effect.length - 1)
                sword = {
                    name: name,
                    type: 'sword',
                    value: [
                        {
                            label: 'power', value: this.Random(100, 130)
                        }
                    ],
                    effect: [],
                    level: level
                }
                sword.effect.push(effect[num])
                result = await this.ctx.model.Equipment.create(sword)
                break;
            case 2:
                sword = {
                    name: name,
                    type: 'sword',
                    value: [
                        {
                            label: 'power', value: this.Random(130, 150)
                        }
                    ],
                    effect: [],
                    level: level
                }
                nums = []
                while (nums.length < 2) {
                    let num = this.Random(1, effect.length - 1)
                    if (!nums.includes(num)) {
                        nums.push(num)
                    }
                }
                for (const iterator of nums) {
                    sword.effect.push(effect[iterator])
                }
                result = await this.ctx.model.Equipment.create(sword)
                break;
            case 3:
                sword = {
                    name: name,
                    type: 'sword',
                    value: [
                        {
                            label: 'power', value: this.Random(150, 180)
                        }
                    ],
                    effect: [],
                    level: level
                }
                nums = []
                while (nums.length < 3) {
                    let num = this.Random(1, effect.length - 1)
                    if (!nums.includes(num)) {
                        nums.push(num)
                    }
                }
                for (const iterator of nums) {
                    sword.effect.push(effect[iterator])
                }
                result = await this.ctx.model.Equipment.create(sword)
                break;
            case 4:
                sword = {
                    name: name,
                    type: 'sword',
                    value: [
                        {
                            label: 'power', value: this.Random(180, 200)
                        }
                    ],
                    effect: [],
                    level: level
                }
                nums = []
                while (nums.length < 4) {
                    let num = this.Random(1, effect.length - 1)
                    if (!nums.includes(num)) {
                        nums.push(num)
                    }
                }
                for (const iterator of nums) {
                    sword.effect.push(effect[iterator])
                }
                result = await this.ctx.model.Equipment.create(sword)
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