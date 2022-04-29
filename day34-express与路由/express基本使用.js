// 引入第三方 http 模块封装的包
const express = require('express')
// 创建应用
const app = express()
// 监听请求
app.get('/',(req,res) => {
    // query 的结果是请求的参数（对象）
    res.send('get 请求返回了')
})
app.post('/',(req,res) => {
    res.send('post 请求返回了')
})
// 开启服务器
app.listen(8081,() => {
    console.log('express server in running!')
})