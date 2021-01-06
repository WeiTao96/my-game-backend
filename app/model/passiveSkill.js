module.exports = app => {
    const mongoose = app.mongoose
    const Schema = mongoose.Schema;
    // 被动技能
    const PassiveSkillSchema = new Schema({
        name: {
            type: String
        },
        num: {
            type: Number
        },
        description: {
            type: String
        }
    })
    // 映射到egg-mongo db 库的 Person 表中（不区分大小写）
    const PassiveSkill = mongoose.model('PassiveSkill', PassiveSkillSchema)

    return PassiveSkill
}