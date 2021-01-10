module.exports = app => {
    const mongoose = app.mongoose
    const Schema = mongoose.Schema;
    // 土地资产
    const LandSchema = new Schema({
        name: {
            type: String
        },
        income: {
            type: Number
        },
        outcome: {
            type: Number
        },
        type: {
            type: Number   // 0 基础建筑  1 收益建筑 2  功能建筑
        },
        s_type: {
            type: Number
        },
        status: {
            type: Boolean
        },
        level: {
            type: Number
        }
    })
    // 映射到egg-mongo db 库的 Person 表中（不区分大小写）
    const Land = mongoose.model('Land', LandSchema)

    return Land
}