/**
 *  定义一个模块 用于连接MongoDB数据库
 *
 */
let mongoose = require("mongoose")
mongoose.connect("mongodb:127.0.0.1/mongoose_test");
mongoose.connection.once("open", function (err) {
    console.log("连接成功")
})

// require(路径)就能引入这个模块