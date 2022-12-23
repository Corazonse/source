/*
*   通过npm下载的包都放到 node_modules文件夹中
*       我们通过npm下载的包 直接通过报名引入即可
*
*       node在使用模块名字引入模块时 它会首先在当前目录的node_modules中寻找是否含有该模块
*           如果有则直接使用 如果没有则去上一级目录的node-modules中寻找
*           如果有就直接使用 没没有就一直找 没有的找到根目录还没有就报错
*
* */
let math = require("math")

console.log(math.add(123, 456))