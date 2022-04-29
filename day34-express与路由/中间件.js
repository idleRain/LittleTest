const express = require('express')
const app = express()

// 中间件
app.get('/', (req, res, next) => {
    req.a = 10
    req.b = 20
    /*return new Promise((resolve) => {
        resolve()
    })*/
    next()
})
// 监听请求
app.get('/', (req, res) => {
    console.log(req.a)
    console.log(req.b)
    res.send('is okay')
})

app.listen(80, () => {
    console.log('server is running')
})