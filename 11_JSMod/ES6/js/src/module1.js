/**
 模块化的语法
 export  暴露数据

 module.export  = value本身就是一个空的对象 暴露 就是暴露他的值

 分别暴露
 export let xxx = xxx
 export function foo(){

 }
 统一暴露
 export{值名,函数名}
 默认暴露
 export default{
    任意类型,
    字符串,
    对象
}
 调用default 语法  xx.default.方法 or（变量）

 import  引用数据
 通用形式
 import * as m1 from "路径"
 解构赋值形式 两次导入重名可以使用别名 xxx as 别名 引入default必须用别名
 import{xxx,xxx} from "路径"

 简便性 只针对默认暴露
 import m3 from "路径"*/

//分别暴露

export function a1() {
    console.log("a1")
}

export function a2() {
    console.log("a2")
}

export let arr = [1, 2, 3, 4, 5]