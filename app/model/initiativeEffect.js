module.exports = app => {
    const mongoose = app.mongoose
    const Schema = mongoose.Schema;
    // 装备效果
    const InitiativeEffectSchema = new Schema({
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
    const InitiativeEffect = mongoose.model('InitiativeEffect', InitiativeEffectSchema)

    return InitiativeEffect
}