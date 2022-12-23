//验证路径是否存在
let fs = require("fs")
/**
 *  fs.existsSync(path)
 *      -检查一个文件是否存在
 *  fs.stat(path,callback)
 *  fs.statSync(path)
 *      -获取文件的状态
 *      -它会给我们返回一个对象 这个对象中保存了当前对象状态的相关信息
 *
 */

// let isHello = fs.existsSync("hello.txt")
// console.log(isHello)
//
// //判断文件的状态
// fs.stat("hello.txt",function (err,stat){
//     if (!err){
//         console.log(stat.size)
//         console.log(stat.isFile())
//     }
// })

// //断开连接删除文件
// fs.unlinkSync("hello3.jpg")

//返回文件夹 fs.readdir("",function(err,files){}) files返回一个数组 每个数组就是一个文件夹或者文件的名字
//截断文件  fs.truncate("",len,callback) 将文件修改为指定大小 修改为三个字节
//创建目录  fs.mkdir("",callback) 删除目录 fs.rmdir("",callback)
//重命名文件夹 fs.rename(oldPath,newPath,callback) 旧路径 新路径 回调函数  把新路经改成其他位置也可以间接实现剪切的功能
/**
 *      fs.watchFile(filename,[options],listener)
 *          -监视文件的修改 实时监听文件 每次检查有一定世间间隔
 *          -参数:
 *              filename 要监视的文件的名字
 *              options 配置选项 可以设置事件间隔 默认5s
 *              listener 回调函数.当文件发生变化时，回调函数汇之星 curr当前文件状态 修改前文件状态 都是stat对象
 */
fs.watchFile("hello.txt", {interval: 20}, function (curr, prev) {
    console.log("文件发生变化了")
    console.log("修改前" + prev.size)
    console.log("修改后" + curr.size)

})