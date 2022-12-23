// 引入 fs 模块

const {rejects} = require("assert")
const fs = require("fs")
const {resolve} = require("path")
//利用util 吧 读取文件的API转换为 promise就可以用在await
const util = require("util")
const mineReadFile = util.promisify(fs.readFile)

// 读取 16三个文件 封装好 返回结果都是 promise 对象
// function read() {
//     return new Promise((resolve, rejects) => {
//         fs.readFile("02.读取的文件.md", (err, data) => {
//             // 判断是否成功
//             if (err) rejects(err)
//             resolve(data)
//         })
//     })
//
// }
//
// function read2() {
//     return new Promise((resolve, rejects) => {
//         fs.readFile("16.读取的文件2.md", (err, data) => {
//             // 判断是否成功
//             if (err) rejects(err)
//             resolve(data)
//         })
//     })
//
// }
//
// function read3() {
//     return new Promise((resolve, rejects) => {
//         fs.readFile("16.读取的文件3.md", (err, data) => {
//             // 判断是否成功
//             if (err) rejects(err)
//             resolve(data)
//         })
//     })
//
// }

// 利用promise     声明一个async 函数
async function main() {
    try {
        // 获取三者的内容
        let f1 = await mineReadFile("16.读取的文件.md")
        let f2 = await mineReadFile("16.读取的文件2.md")
        let f3 = await mineReadFile("16.读取的文件3.md")
        // 输出内容
        console.log(f1.toString());
        console.log(f2.toString());
        console.log(f3.toString());
    }catch (e){
        console.log(e.code)
    }

}

main()