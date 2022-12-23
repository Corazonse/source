// 1.引用express
const express = require('express')

//2.创建应用对象
const app = express();

//3.创建路由规则 函数形参
// request 请求报文的封装 response是响应报文的封装 /server客户端浏览器发送
app.all('/json', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')

    // 设置响应体
    response.send("hello ajax")
})

app.all('/json-server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 设置响应体
    // response.send("hello ajax POST")
    // 响应一个数据
    const data = {
        name: 'ddd'
    }
    //对对象进行一个字符转换
    let str = JSON.stringify(data)
    // 设置响应体
    response.send(str)
})

// 4.监听端口启动服务
app.listen(8008, () => {
    console.log("服务器已经启动，8008端口监听中");
})