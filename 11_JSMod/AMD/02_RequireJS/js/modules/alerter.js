// 定义一个有依赖的模块
define(['dataServer']),function (dataServer){
    let msg = 'alerter.js'
    function MSG(){
        console.log(msg,dataServer.getName())
    }
    //暴露
    return {MSG}
}