// 引入fs模块
const {rejects} = require("assert")
const {log} = require("console")
const fs = require("fs")
const {resolve} = require("path")

// 回调地狱方法
// fs.readFile("02.读取的文件.md",(err,data)=>{
//     fs.readFile("16.读取的文件2.md",(err,data2)=>{
//         fs.readFile("16.读取的文件3.md",(err,data3)=>{
//             let result = data + "\r\n" +data2 +"\r\n"+ data3
//             console.log(result);
//         })
//     })
// })

// 封装到 promise 实现
const p = new Promise((resolve, rejects) => {
    fs.readFile("02.读取的文件.md", (err, data) => {
        resolve(data)
    })
})
// 调用  通过then方法将多个异步任务串联起来

p.then(value => {
    return new Promise((resolve, rejects) => {
        fs.readFile("16.读取的文件2.md", (err, data) => {
            resolve([value, data])
        })
    })
}).then(value => {
    return new Promise((resolve, rejects) => {
        fs.readFile("16.读取的文件3.md", (err, data) => {
            // 压入
            value.push(data)
            resolve(value)
        })
    })
    // 此时的then方法就是三个文件合并的内容
}).then(value => {
    // 拼接三者数组
    console.log(value.join('\r\n'));
    console.log("=============");
    console.log(value.toString());
})