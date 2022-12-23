// 1.引用express
const express = require('express')

//2.创建应用对象
const app = express();

//3.创建路由规则 函数形参
// request 请求报文的封装 response是响应报文的封装 /server客户端浏览器发送
app.get('/server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')

    // 设置响应体
    response.send("hello ajax")
})
// post 改成 all就可以配合 21行
app.post('/server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 所有类型的头信息都可以接受 包括自定义 post要改成all
    response.setHeader('Access-Control-Allow-Headers', '*')

    // 设置响应体
    response.send("hello ajax POST")
})

// 4.监听端口启动服务
app.listen(8000, () => {
    console.log("服务器已经启动，8000端口监听中");
})