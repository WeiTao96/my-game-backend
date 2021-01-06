module.exports = app => {
    const mongoose = app.mongoose
    const Schema = mongoose.Schema;
    // 主动技能
    const InitiativeSkillSchema = new Schema({
        name: {
            type: String
        },
        type: {
            type: String
        },
        value: {
            type: Number
        },
        effect: {
            type: Array
        },
        level: {
            type: Number
        }
    })
    // 映射到egg-mongo db 库的 Person 表中（不区分大小写）
    const InitiativeSkill = mongoose.model('InitiativeSkill', InitiativeSkillSchema)

    return InitiativeSkill
}