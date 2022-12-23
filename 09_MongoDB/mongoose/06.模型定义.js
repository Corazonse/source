/*
*   定义Student模型
*
*   一次创建无限使用
* */
let mongoose = require("mongoose")
const {model} = require("mongoose");

let Schema = mongoose.Schema

let stuSchema = new Schema({
    name: String,
    age: Number,
    gender: {
        type: String,
        default: "female" //类型 string  默认为女
    },
    address: String
})
//定义模型
let StuModel = mongoose.model("student", stuSchema)
//暴露模型  直接把模型对象赋值给exports
model.exports = StuModel

/**
 * 接收对象
 *      require(连接路径)
 *      let Student = require(模型路径)

 */