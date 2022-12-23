exports.add = function (a, b) {
    return a + b
}
exports.mul = function (a, b) {
    return a * b
}
//局部
let a = 10
//全局
b = 10
console.log(global.a)
console.log(global.b)

// 在node中有一个全局对象 global 他的作用和网页中window类似
//     在全局中创建的变量都会作为global属性保存
//     在全局创建你的函数都会作为global的放大保存
//      当node执行模块中的代码时 它会在代码的包装在以下函数中
//      实际上模块的代码同时传递了5个实参
//     function (exports 暴露参数,require 引入外部模块
//     ,module代表的是当前模块本身 exports就是module的属性 exports===module.exports,
//     __filename 当前模块完整路径 ,__dirname 当前模块所在文件夹路径){
//         xxxxxxx
//     }
//因此 模块的代码都包装在一个函数里面 所以 模块的代码都是局部变量

exports.name = "孙悟空"
exports.age = 18
exports.fn = function () {
    console.log("孙悟空我是")
}

module.exports = {
    name: "猪八戒",
    age: 18

}
//exporst 和 module.exports
//通过exports只能使用 . 的方式来向外部暴露内部变量
//     exports.xxx =xxx
//module.exports 既可以通过.的形式 也可以直接赋值 只用它
//      module.exports.xxx = xxx
//      module.exports = {}
