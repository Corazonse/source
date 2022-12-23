define(function () {
    let name = "zyd"
    function getName(){
        return name
    }
//    暴露模块直接用return的模式
    return{getName}
})