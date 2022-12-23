/**
 *      Document 和集合中的文档一一对应 Document是Model的实例
 *          通过Model查询到结果都是Document
 */
let mongoose = require("mongoose")
const {Model} = require("mongoose");
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


//创建一个Document对象 但是还未插进数据库
let stu = new StuModel({
    name: "奔波霸",
    age: 12,
    gender: "male",
    address: "你好"
})
/**
 *      doucument的方法
 *          Mode#save([options],[fn])
 *
 *
 * */
//利用文档保存 和 create有一定的区别
stu.save(function (err) {
    if (!err) {
        console.log("保存成功")
    }
})
StuModel.findOne({}, function (err, doc) {
    // doc.update(update,[options],[callback])
//      修改对象
//     doc.update({$set:{age:999}},function (err){
//         console.log("修改成功")
//     })  或者
    doc.age = 999
    doc.save()
    // doc.remove()删除
    /*
    *   get()  获取
    *
    *   set()  或者设置
    *
    *   toJSON() 转换为JSON  存疑
    *
    *   toObject() 将document对象转换为普通的js对象 转换后document所有的方法对象都不能使用了
    *       --不想要敏感属性的时候可以转换 id啊 address之类
    *
    * */
    set(name, "哈哈哈")
})


