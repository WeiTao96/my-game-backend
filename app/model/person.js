module.exports = app => {
    const mongoose = app.mongoose
    const Schema = mongoose.Schema;
    // 人物
    const PersonSchema = new Schema({
        name: {
            type: String
        },
        age: {
            type: Number
        },
        sex: {
            type: String
        },
        job: {
            type: String  //职位
        },
        equipment: {
            hat: {
                type: Object
            },
            clothes: {
                type: Object
            },
            ring: {
                type: Object
            },
            talisman: {    //护符
                type: Object
            },
            shoes: {
                type: Object
            },
            pants: {
                type: Object
            },
            arm: {
                type: Object
            },
        },
        bags: {
            type: Array
        },
        ablility: {
            HP: {
                type: Number
            },
            MAX_HP: {
                type: Number
            },
            power: {
                type: Number
            },
            MAX_power: {
                type: Number
            },
            speed: {
                type: Number
            },
            MAX_speed: {
                type: Number
            },
            defense: {
                type: Number
            },
            MAX_defense: {
                type: Number
            },
            intelligent: {
                type: Number
            },
            look: {
                type: Number
            },
            loyalty: {
                type: Number
            },
        },
        skills: {
            initiative: {
                type: Array    //主动
            },
            passive: {
                type: Array    //被动
            }
        },
        relationship: {
            parents: {
                type: Array
            },
            teacher: {
                type: Array
            }
        }
    })
    // 映射到egg-mongo db 库的 Person 表中（不区分大小写）
    const Person = mongoose.model('Person', PersonSchema)

    return Person
}