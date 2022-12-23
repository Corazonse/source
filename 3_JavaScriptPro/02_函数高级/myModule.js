function myModule() {
    // 私有数据
    var msg = "My new"

    // 操作数据
    function doSomething() {
        console.log('doSomething' + msg.toUpperCase())
    }

    function doOther() {
        console.log('doOther' + msg.toLowerCase())
    }

    // 暴露给外部的数据 用对象可以多个返回
    return {
        doSomething: doSomething,
        doOther: doOther
    }
}