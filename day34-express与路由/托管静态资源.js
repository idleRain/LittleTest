const express = require('express')
const app = express()
// 托管静态资源      // localhost
app.use(express.static('../day04-小兔仙儿用户页面flex布局/小兔仙儿'))
// 设置路径         // localhost/bilibili
app.use('/bilibili', express.static('../day06-vh丨vw与bilibili案例'))

// 开启服务器
app.listen(80, () => {
    console.log('server is running!')
})