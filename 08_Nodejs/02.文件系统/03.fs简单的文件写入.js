/*
    开发中常用的简单文件写入方式
        fs.writeFile(file,data,[options],callback)
        fs.writeFileSync(file,data,callback)
            -file 操作文件路径
            -data 要写入的数据
            -options 选项 可以写入进行一些设置 一般需要一个对象作为参数 一般不写 a追加 w覆盖 r读 等等
            -callback 当写入完成以后执行函数

 */
let fs = require("fs")
//绝对路径要双\\ 或者 单 /
fs.writeFile("hello3.txt", "这是通过writeFile写入的内容", {flag: "a"}, function (err) {
    if (!err) {
        //写入后内容会覆盖
        //这个方法不用打开关闭文件因为writeFile里面已经完成封装 所以简单
        console.log("成功")
    }
})

