/*
    流式读取也适用于一些比较大的文件 可以分多次读取到内存中

 */
let fs = require("fs")

//创建一个可读流
let rs = fs.createReadStream("hello.jpg")
//创建一个可写流
let ws = fs.createWriteStream("hello3.jpg")

//pipe() 直接把读取到的写进去   自动完成 甚至不用监听
rs.pipe(ws)

//监听流的开启和关闭
// rs.once("open",function (){
//     console.log("可读流开启")
// })
// rs.once("close",function (){
//     console.log("可读流关闭")
// //    数据读取完毕关闭可写流
//     ws.end()
// })


// ws.once("open",function (){
//     console.log("可写流开启")
// })
// ws.once("close",function (){
//     console.log("可写流关闭")
// })