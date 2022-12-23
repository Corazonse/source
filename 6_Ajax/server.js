// 1.引用express
const {request, response} = require('express');
const express = require('express')

//2.创建应用对象
const app = express();

//3.创建路由规则 函数形参
// request 请求报文的封装 response是响应报文的封装 /server客户端浏览器发送
app.get('/server-IE', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')

    // 设置响应体
    response.send("hello ajax -2 IE")
})
// post 改成 all就可以配合 21行
app.post('/server-IE', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 所有类型的头信息都可以接受 包括自定义 post要改成all
    response.setHeader('Access-Control-Allow-Headers', '*')

    // 设置响应体
    response.send("hello ajax POST -2 IE")
})

// 延时请求规则
app.get('/server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 所有类型的头信息都可以接受 包括自定义 post要改成all
    response.setHeader('Access-Control-Allow-Headers', '*')
    // 定时器
    setTimeout(() => {
        // 设置响应体
        response.send("hello ajax POST -2 IE")
    }, 3000)
})
// jQuery服务
app.all('/jquery', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 所有类型的头信息都可以接受 包括自定义 post要改成all
    response.setHeader('Access-Control-Allow-Headers', '*')
    const data = {name: "嘟嘟嘟"}


    // 设置响应体
    // response.send("hello ajax jQuery")
    response.send(JSON.stringify(data))


})
// Axios服务
app.all('/Axios', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 所有类型的头信息都可以接受 包括自定义 post要改成all
    response.setHeader('Access-Control-Allow-Headers', '*')
    const data = {name: "粥粥粥"}


    // 设置响应体
    // response.send("hello ajax jQuery")
    response.send(JSON.stringify(data))


})
app.all('/Fetch', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 所有类型的头信息都可以接受 包括自定义 post要改成all
    response.setHeader('Access-Control-Allow-Headers', '*')
    const data = {name: "fff"}
    // 设置响应体
    // response.send("hello ajax jQuery")
    response.send(JSON.stringify(data))


})
// 检测用户名是否存在
app.all('/username', (request, response) => {
    // 设置响应头 设置允许跨域
    // response.setHeader('Access-Control-Allow-Origin', '*')
    // // 所有类型的头信息都可以接受 包括自定义 post要改成all
    // response.setHeader('Access-Control-Allow-Headers', '*')
    const data = {
        exist: 1,
        msg: "用户名已存在"
    }

    // 设置响应体
    let str = JSON.stringify(data)
    response.end(`handle(${str})`)

})


app.all('/JSONP', (request, response) => {
    // 设置响应头 设置允许跨域
    // response.setHeader('Access-Control-Allow-Origin', '*')
    // // 所有类型的头信息都可以接受 包括自定义 post要改成all
    // response.setHeader('Access-Control-Allow-Headers', '*')
    // response.send("console.log('hello')")

    const data = {
        name: "嘟嘟嘟"
    }
    // 将数据转化为字符串
    let str = JSON.stringify(data)
    // 返回结果 模板字符串  ？？ 响应以个js代码
    response.end(`handle(${str})`)
})

app.all('/JSONP-JQUERY', (request, response) => {

    const data = {
        name: "嘟嘟嘟",
        city: ['北京', '上海', '深圳']

    }
    // 接受callback参数
    let str = JSON.stringify(data)
    // 返回结果 能把callback参数的值拿过来
    let cb = request.query.callback;
    // 返回结果 模板字符串 
    response.end(`${cb}(${str})`)

})

app.all('/cors-server', (request, response) => {
    // 跨域必须添加响应头 *通配 所有网页都好使
    response.setHeader("Access-Control-Allow-Origin", "*")
    // // 所有类型的头信息都可以接受 包括自定义 post要改成all
    response.setHeader('Access-Control-Allow-Headers', '*')
    // 请求方法
    // 御三家 客户端发送请求时 请求方法可以随意 类型 可以随意 网页也可以随意
    response.setHeader("Access-Control-Allow-Method", "*")
    response.send("hello cors")
})


// 4.监听端口启动服务
app.listen(8000, () => {
    console.log("服务器已经启动，8000端口监听中");
})