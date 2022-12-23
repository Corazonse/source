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
/**
 *  有了Model 我们就可以实现对数据库的进行增删改查操作了
 *  Model.create(doc(s),[callback])
 *  -用来创建一个或多个文档并添加到数据库中
 *  -参数
 *      doc(s) 落时候耦合文档对象 也可以是一个文档对线的数据
 *      callback 操作完成的回调函数
 *
 */
StuModel.create([
    {
        name: "猪猪",
        age: 29,
        gender: "male",
        address: "女儿国"
    },
    {
        name: "猴猴",
        age: 229,
        gender: "male",
        address: "水帘洞"
    }
], function (err) {
    if (!err) {
        console.log("插入成功!")
        // console.log(arguments)//查看插入的内容
    }
})
/**
 *  Model.find() 查询所有符合条件的文档
 *
 *  Model.findById() 根据文档的id 属性查询文档
 *
 *  Model.findOne() 查询符合条件的第一个文档 总会返回文档对象
 *
 *      conditions 查询的条件
 *      projection 投影
 *      options 查询选项(skip limit)
 *      callback 回调函数 查询结果由回调函数返回 回调函数必须传 如果不传回调函数 压根不会查询
 *
 */
//查询 docs返回值 find()返回的是数组
StuModel.find({name: "猪猪"}, function (err, doc) {
    if (!err) {
        console.log(doc[0].name)
    }
})
//"" 里面就是索引 有 - 就是不要那个数   skip:3跳过前两个 limit:1 最多显示一个 通过find()返回的doc对象就是Document对象(model（StuModel这个）的实例)
StuModel.find({name: "猪猪"}, "name -_id", {skip: 3, limit: 1}, function (err, doc) {
    if (!err) {
        console.log(doc)
    }
})

// 修改
/**
 * Model.update()
 * Model.updateOne()
 * Model.updateMany()
 *      -用来修改一个或多个文档
 *      conditions 查询的条件
 *      doc 修改后的一个对象
 *      options 配置参数(skip limit)
 *      callback 回调函数
 */
//修改猪猪的年龄为20
StuModel.updateOne({name: "猪猪"}, {$set: {age: 2000}}, function (err) {
    if (!err) {
        console.log("修改成功")
    }
})
//删除
/**
 *  Model.deleteOne(conditions,[callback])
 *  Model.deleteMany(conditions,[callback])
 *
 * 统计数量
 * Model.cont(conditions,[callback])
 */
StuModel.count({name: "猪猪"}, function (err, count) {
    if (!err) {
        console.log("猪猪的总数量为" + count)
    }
})