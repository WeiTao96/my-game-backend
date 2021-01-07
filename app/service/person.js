const Service = require('egg').Service;
let randomName = require("chinese-random-name")

class PersonService extends Service {
    async getAllPerson() {
        let result = this.ctx.model.Person.find({})
        return result
    }
    async randOne(level) {
        let user
        switch (level) {
            case "top":
                user = {
                    name: randomName.names.get(),
                    age: this.Random(13, 70),
                    sex: this.Random(0, 1),
                    job: 10,
                    ability: {
                        HP: this.Random(1000, 10000),
                        MAX_HP: this.Random(10000, 20000),
                        power: this.Random(1, 100),
                        MAX_power: this.Random(100, 200),
                        speed: this.Random(1, 100),
                        MAX_speed: this.Random(100, 200),
                        defense: this.Random(1, 100),
                        MAX_defense: this.Random(100, 200),
                        intelligent: this.Random(1, 10),
                        look: this.Random(1, 10),
                        loyalty: 60
                    },
                    skills: {
                        initiative: [
                            {
                                name: '下劈',
                                _id: '5ff6d3722b5e130c3ee639ad'
                            }
                        ]
                    }
                }
                break;
            case "middle":
                user = {
                    name: randomName.names.get(),
                    age: this.Random(13, 70),
                    sex: this.Random(0, 1),
                    job: 10,
                    ability: {
                        HP: this.Random(1000, 10000),
                        MAX_HP: this.Random(10000, 18000),
                        power: this.Random(1, 100),
                        MAX_power: this.Random(100, 150),
                        speed: this.Random(1, 100),
                        MAX_speed: this.Random(100, 150),
                        defense: this.Random(1, 100),
                        MAX_defense: this.Random(100, 150),
                        intelligent: this.Random(1, 10),
                        look: this.Random(1, 10),
                        loyalty: 60
                    },
                    skills: {
                        initiative: [
                            {
                                name: '下劈',
                                _id: '5ff6d3722b5e130c3ee639ad'
                            }
                        ]
                    }
                }
                break;
            case "low":
                user = {
                    name: randomName.names.get(),
                    age: this.Random(13, 70),
                    sex: this.Random(0, 1),
                    job: 10,
                    ability: {
                        HP: this.Random(1000, 10000),
                        MAX_HP: this.Random(10000, 12000),
                        power: this.Random(1, 100),
                        MAX_power: this.Random(100, 120),
                        speed: this.Random(1, 100),
                        MAX_speed: this.Random(100, 120),
                        defense: this.Random(1, 100),
                        MAX_defense: this.Random(100, 120),
                        intelligent: this.Random(1, 10),
                        look: this.Random(1, 10),
                        loyalty: 60
                    },
                    skills: {
                        initiative: [
                            {
                                name: '下劈',
                                _id: '5ff6d3722b5e130c3ee639ad'
                            }
                        ]
                    }
                }
                break;
            default:
                break;
        }
        let return_user = this.ctx.model.Person.create(user)
        return return_user
    }
    async update(id, update) {
        let result = this.ctx.model.Person.findOneAndUpdate({ _id: id }, update, { new: true })
        return result
    }
    async remove(id) {
        let result = this.ctx.model.Person.findOneAndDelete({ _id: id })
        return result
    }
    Random(min, max) {
        return Math.round(Math.random() * (max - min)) + min;
    }
}

module.exports = PersonService;