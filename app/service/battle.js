const Service = require('egg').Service;

class BattleService extends Service {
    async fight(aId, bId) {
        let aPerson = await this.ctx.model.Person.findById(aId)
        let bPerson = await this.ctx.model.Person.findById(bId)
        let aAbility = await this.contEquipmentValue(aPerson)
        let bAbility = await this.contEquipmentValue(bPerson)
        let aRoad = 0;
        let bRoad = 0;
        let aSkill = 0;
        let bSkill = 0;
        let aInitiativeSkill = await this.getInitiativeSkill(aPerson)
        let bInitiativeSkill = await this.getInitiativeSkill(bPerson)
        let aSpeed = aAbility.speed;
        let bSpeed = bAbility.speed;
        let records = [];
        while (aAbility.HP > 0 && bAbility.HP > 0) {
            while (aRoad < 1000 && bRoad < 1000) {
                aRoad = aRoad + aSpeed
                bRoad = bRoad + bSpeed
            }
            if (aRoad > bRoad) {
                let attack = aAbility.power

                // 计算加上技能伤害的攻击力
                if (aPerson.skills.initiative[aSkill]) {
                    attack = attack * aInitiativeSkill[aSkill]
                    records.push(`${aPerson.name} 使用 ${aPerson.skills.initiative[aSkill].name} 对 ${bPerson.name} 造成了 ${Math.floor(attack / bAbility.defense)} 点伤害`)
                    aSkill = aSkill + 1
                } else {
                    aSkill = 0
                    attack = attack * aInitiativeSkill[aSkill]
                    records.push(`${aPerson.name} 使用 ${aPerson.skills.initiative[aSkill].name} 对 ${bPerson.name} 造成了 ${Math.floor(attack / bAbility.defense)} 点伤害`)
                }
                console.log(attack / bAbility.defense);
                bAbility.HP = bAbility.HP - Math.floor(attack / bAbility.defense)
                aRoad = 0
            } else {
                let attack = bAbility.power

                // 计算加上技能伤害的攻击力
                if (bPerson.skills.initiative[bSkill]) {
                    attack = attack * bInitiativeSkill[bSkill]
                    records.push(`${bPerson.name} 使用 ${bPerson.skills.initiative[bSkill].name} 对 ${aPerson.name} 造成了 ${Math.floor(attack / aAbility.defense)} 点伤害`)
                    bSkill = bSkill + 1
                } else {
                    bSkill = 0
                    attack = attack * bInitiativeSkill[bSkill]
                    records.push(`${bPerson.name} 使用 ${bPerson.skills.initiative[bSkill].name} 对 ${aPerson.name} 造成了 ${Math.floor(attack / aAbility.defense)} 点伤害`)
                }
                aAbility.HP = aAbility.HP - Math.floor(attack / aAbility.defense)
                bRoad = 0
            }
        }
        if (aAbility.HP <= 0) {
            records.push(`${aPerson.name} 被击败了`)
        } else {
            records.push(`${bPerson.name} 被击败了`)
        }
        return records;
    }
    async getInitiativeSkill(person) {
        const initiative = person.skills.initiative
        const initiativeValue = []
        for (const iterator of initiative) {
            const res = await this.ctx.model.InitiativeSkill.findById(iterator._id)
            initiativeValue.push(res.value)
        }
        return initiativeValue
    }
    // 计算加上装备后的属性
    async contEquipmentValue(person) {
        let equipments = person.equipment
        let ability = person.ability
        if (equipments.hat) {
            for (const item of equipments.hat.value) {
                ability = await this.switchValue(item, ability)
            }
        }
        if (equipments.clothes) {
            for (const item of equipments.clothes.value) {
                ability = await this.switchValue(item, ability)
            }
        }
        if (equipments.ring) {
            for (const item of equipments.ring.value) {
                ability = await this.switchValue(item, ability)
            }
        }
        if (equipments.shoes) {
            for (const item of equipments.shoes.value) {
                ability = await this.switchValue(item, ability)
            }
        }
        if (equipments.pants) {
            for (const item of equipments.pants.value) {
                ability = await this.switchValue(item, ability)
            }
        }
        if (equipments.arm) {
            for (const item of equipments.arm.value) {
                ability = await this.switchValue(item, ability)
            }
        }
        return ability
    }
    async switchValue(item, ability) {
        switch (item.label) {
            case 'power':
                ability.power = ability.power + item.value
                break;
            case 'speed':
                ability.speed = ability.speed + item.value
                break;
            case 'defense':
                ability.defense = ability.defense + item.value
                break;
            case 'HP':
                ability.HP = ability.HP + item.value
                break;
            default:
                break;
        }
        return ability
    }
}

module.exports = BattleService;