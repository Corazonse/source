// 引入fs模块
const fs = require('fs')
// 使用promise封装 当执行多个异步任务防止 缩进过多
const p = new Promise(function (resolve, reject) {
    fs.readFile('02.失败的文件.md', (err, data) => {
        //    成功或者失败 就改变 p 的状态 并且返回成功或者失败的结果
        if (!err) {
            resolve(data)
            // console.log(data.toString())
        } else {
            reject(err)

        }
    })
})
// 利用 then 处理 成功失败的值
p.then(function (value) {
    console.log(value.toString());
}, function (reason) {
    console.log("读取失败");
})
/**
 *  封装一个函数 mineReadFile 读取文件内容
 * 参数 ：path 文件路径
 * 返回： promise 对象
 * 
 */
function mineReadFile(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, (err, data) => {
            //    成功或者失败 就改变 p 的状态 并且返回成功或者失败的结果
            if (!err) {
                resolve(data)
                // console.log(data.toString())
            } else {
                reject(err)

            }
        })
    })

}
// 调用并且
// 利用 then 处理 成功失败的值
mineReadFile("02.读取的文件.md").then((value) => {
    console.log(value.toString());
}, (reason) => {
    console.log("读取失败");
})
