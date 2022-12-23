/*
    流式读取也适用于一些比较大的文件 可以分多次读取到内存中

 */
let fs = require("fs")

//创建一个可读流
let rs = fs.createReadStream("hello.jpg")

//监听流的开启和关闭
rs.once("open", function () {
    console.log("可读流开启")
})
rs.once("close", function () {
    console.log("可读流关闭")
//    数据读取完毕关闭可写流
    ws.end()
})
//如果要读取一个可读流的数据 必须要为可读流绑定一个data事件 data事件绑定完毕 它会自动开始读取数据
rs.on("data", function (data) {
    //每次读65536个字节
    // console.log(data.length)
    // 将读取到的数据写入进去
    ws.write(data)
})

//创建一个可写流
let ws = fs.createWriteStream("hello2.jpg")
ws.once("open", function () {
    console.log("可写流开启")
})
ws.once("close", function () {
    console.log("可写流关闭")
})