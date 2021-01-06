module.exports = app => {
    const mongoose = app.mongoose
    const Schema = mongoose.Schema;
    // 装备
    const EquipmentSchema = new Schema({
        name: {
            type: String
        },
        type: {
            type: String
        },
        value: {
            type: Array
        },
        effect: {
            type: Array
        },
        level: {
            type: Number
        }
    })
    // 映射到egg-mongo db 库的 Person 表中（不区分大小写）
    const Equipment = mongoose.model('Equipment', EquipmentSchema)

    return Equipment
}