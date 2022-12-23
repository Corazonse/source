/*
    同步 异步 简单写入都是一次性的 文件过大的时候会出问题对性能损耗很大 甚至导致内存溢出

    流式文件写入



 */
let fs = require("fs")

//流式文件写入 类似水管输送
//创建可写流 水管
// fs.creatWriteStream(path,[option]) option 添加只读可写之类的选项
let ws = fs.createWriteStream("hello3.txt")
//关闭流之前 通过close open事件来 监听流是否打开 open事件只会触发一次
// once只绑定一次 on多次 都是可以绑定监听事件
//参数绑定事件 参数2回调函数
ws.once("open", function () {
    console.log("流打开了")
})
ws.once("close", function () {
    console.log("关闭")
})

//通过ws向文件中输出内容
ws.write("我写我写我写")
ws.write("我写2我写2我写2")
ws.write("我写3我写3我写3")
ws.write("我写4我写4我写4")

//关闭流之前 通过end open事件来 监听流是否打开 close可能会出现没写入的情况
ws.end()
