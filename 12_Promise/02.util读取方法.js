/**
 * node 的内置模块
 *  util.promisify
 *  传入一个遵循错误优先的回调风格的函数 即 （err,value）=>
 */
// 引入 util 模块
let util = require('util')
// 引入fs模塊 上面已經引入
let fs = require("fs")
// 返回一个新的函数 promise风格的函数  不用回调判断对错？ 应该
// 我的理解是，向util模块的promisify 传一个err风格的函数，会自动帮我们封装好，
// 返回一个新的函数，这个函数是返回promise对象
let mineReadFile = util.promisify(fs.readFile)

mineReadFile('02.读取的文件.md').then((value)=>{
    console.log(value.toString());
})

