const Service = require('egg').Service;

class SkillService extends Service {
    async newInitiativeSkill(name, type, level) {
        let result
        let skill
        let nums
        const effect = await this.ctx.model.InitiativeEffect.find({})
        switch (level) {
            case 0:
                skill = {
                    name: name,
                    type: type,
                    value: this.Random(50, 60),
                    effect: [],
                    level: level
                }
                result = await this.ctx.model.InitiativeSkill.create(skill)
                break;
            case 1:
                let num = this.Random(1, effect.length - 1)
                skill = {
                    name: name,
                    type: type,
                    value: this.Random(60, 70),
                    effect: [],
                    level: level
                }
                skill.effect.push(effect[num])
                result = await this.ctx.model.InitiativeSkill.create(skill)
                break;
            case 2:
                skill = {
                    name: name,
                    type: type,
                    value: this.Random(70, 80),
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
                    skill.effect.push(effect[iterator])
                }
                result = await this.ctx.model.InitiativeSkill.create(skill)
                break;
            case 3:
                skill = {
                    name: name,
                    type: type,
                    value: this.Random(80, 90),
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
                    skill.effect.push(effect[iterator])
                }
                result = await this.ctx.model.InitiativeSkill.create(skill)
                break;
            case 4:
                skill = {
                    name: name,
                    type: type,
                    value: this.Random(90, 100),
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
                    skill.effect.push(effect[iterator])
                }
                result = await this.ctx.model.InitiativeSkill.create(skill)
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

module.exports = SkillService;