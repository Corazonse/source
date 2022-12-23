(function () {

    // 私有数据
    var msg = "My new"

    // 操作数据
    function doSomething() {
        console.log('doSomething' + msg.toUpperCase())
    }

    function doOther() {
        console.log('doOther' + msg.toLowerCase())
    }

    // 把要暴露的东西 添加给window属性就可以
    window.myModule2 = {
        doSomething: doSomething,
        doOther: doOther
    }

})()