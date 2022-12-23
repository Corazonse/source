// 主js文件 dist文件夹是打包生成的目录
// browserify  打包编译
// npm install browserify -g 全局安装  依赖写进去
// npm install browserify --save-dev 局部安装  开发依赖的包
/** 
 *      开发依赖    开发的时候
 * 
 *      运行依赖  上线使用的时候
 *  
 * 
 * 
 * 
 * 
*/
let mod = require("./modulue1.js")

mod.mod()