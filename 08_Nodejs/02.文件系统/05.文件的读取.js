/*
    1.同步文件读取
    2.异步文件读取
    3.简单文件读取
        -fs.readFile(path,[options],callback)
        -fs.readFileSync(path,[options])
    4.流式文件读取
 */
let fs = require("fs")

//简单读取返回
fs.readFile("hello3.txt", function (err, data) {
    if (!err) {
        //十六进制转换为字符串 因为有概率是图片所以默认并不是文字
        console.log(data.toString())
    }
})
//简单读取图片
fs.readFile("C:\\Users\\周永都\\Desktop\\前段练习素材\\移动端练习\\2.jpg", function (err, data) {
    if (!err) {
        //十六进制转换为字符串 因为有概率是图片所以默认并不是文字
        console.log(data)
        //    将读取的东西写到文件
        fs.writeFile("hello.jpg", data, function (err) {
            if (!err) {
                //实现图片复制
                console.log("文件写入成功")
            }
        })
    }
})