module.exports = app => {
    const mongoose = app.mongoose
    const Schema = mongoose.Schema;
    // 装备效果
    const EquipmentEffectSchema = new Schema({
        name: {
            type: String
        },
        num: {
            type: Number
        },
        type: {
            type: Number    // 0 攻击性增益  1 防御性增益  2 灵巧性增益 
        },
        description: {
            type: String
        }
    })
    // 映射到egg-mongo db 库的 Person 表中（不区分大小写）
    const EquipmentEffect = mongoose.model('EquipmentEffect', EquipmentEffectSchema)

    return EquipmentEffect
}