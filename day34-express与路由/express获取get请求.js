const express = require('express')
const app = express()

app.get('/user',(req,res) => {
    // req.query 的结果是请求的参数（对象）
    console.log(req.query)
    res.send('query is okay')
})

app.get('/user/:name/:age', (req, res) => {
    // req.params 的结果是请求的参数（对象），需要配合 url占位符 使用
    console.log(req.params)
    res.send('params is okay')
})
app.listen(8082, () => {
    console.log('server in running!')
})