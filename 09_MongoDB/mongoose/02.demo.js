let mongoose = require("mongoose")
//监听
mongoose.connection.once("open", function () {
    console.log("数据库连接成功")
})
mongoose.connection.once("close", function () {
    console.log("数据库断开")
})
//连接
mongoose.connect("mongodb://127.0.0.1/mongoose_test")

// 创建Schema(模式对象)
//给mongoose.Schema赋值给一个变量
let Schema = mongoose.Schema;
//创建Schema 模式 对象
let stuSchema = new Schema({
    name: String,
    age: Number,
    gender: {
        type: String,
        default: "female" //类型 string  默认为女
    },
    address: String
})
//通过Schema来创建Model模型   类似构造函数
//Model代表的是数据库的集合 通过Model才能对数据库进行操作
//mongoose.model(modelName,schema)前为映射 后为约束 mongoose会自动将集合变成复数
let StuModel = mongoose.model("student", stuSchema);

//向数据库插入一个文档StuModel.create(doc，function(err){})
StuModel.create({
    name: "孙悟空",
    age: "18"
}, function (err) {
    if (!err) {
        console.log("插入成功")
    }
})