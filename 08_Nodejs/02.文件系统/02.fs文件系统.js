/*
*   文件系统(file system)
*       通过node操作系统中的文件
*       使用文件系统需要先引入 fs 模块是核心模块直接引入
*
* */
let fs = require("fs")

// console.log(fs)
//fs模块中所有的操作都可以提供 异步方法 性能好   和   同步方法 符合人类思维
//同步文件系统会阻塞程序运行 也就是除非操作完毕 否则不会执行向下代码 sync是同步的
//异步文件系统不会阻塞程序的执行 而是操作完成时 通过回调函数将结果返回 nodejs特色 异步都有callback回调函数

// 文件的写入 手动操作步骤   open > write > save > close

// ==========================
//同步文件的写入
// path路径
// flags操作类型 r只读 w可写的
//mode 设置文件的操作权限 一般不传
let fd = fs.openSync("hello.txt", "w") //在内存里打开了
// ↑有一个返回值：该方法会返回一个文件的描述符为结果 我们可以对文件的描述符进行各种操作
console.log(fd)//打开文件的返回值

//写入内容 第一个fd 文件的描述返回值(或者直接fd)   第二个参数string 需要写入的内容 第三个position encoding(默认编码utf-8)一般不传递
fs.writeSync(3, "你好nodejs，你好fs", 20)//从索引为20的地方开始写

//保存并关闭文件 在服务器运行的程序不会停 一定记得关闭
fs.closeSync(fd)//传进文件的描述符

//===============================
//异步文件写入 和同步基本一致 就多一个callback--不能省略 有隐患一个异常全部不行 比同步更严谨
// 异步方法不可能有 let fd返回值 所以只能靠回调函数
fs.open("hello2.txt", "w", function (err, fd) {
    //回调函数有两个参数 回调函数后执行
    //err 错误对象，如果没有错误就null  node的错误思想 错误优先
    //fd 文件的描述符
    console.log(arguments)
    //处理错误
    if (!err) {
        //如果没有出错
        //异步写入一个文件 回调不用fd 仅有err就行
        fs.write(fd, "异步方式写入的内容", function (err) {
            if (!err) {
                console.log("写入成功")
            }
            //    关闭文件
            fs.close(fd, function (err) {
                if (!err) {
                    console.log("文件已关闭")
                }
            })

        })

    } else {
        console.log(err)
    }
})
console.log("向下执行 在异步回调之前")
