const express = require('express')

const app = express()

app.get('/home', (request, response) => {
    response.sendFile(__dirname + '/01_同源策略.html')
})
app.get('/data', (request, response) => {
    response.send('用户数据')
})

app.listen(9000, () => {
    console.log("服务器 9000 已启动！");
})
