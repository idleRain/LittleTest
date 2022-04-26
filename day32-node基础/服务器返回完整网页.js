// 导入http
const http = require('http')
const fs = require('fs')
const path = require('path')
// 创建服务器实例
const server = http.createServer()
// 监听客户端请求
server.on('request', (req, res) => {
    if (req.url === '/' || req.url === '/index.html') {
        fs.readFile(path.join(__dirname, 'html/demo.html'), (error, data) => {
            if (error) return  console.log(error)
            res.end(data)
        })
    }
})
// 开启服务器
server.listen(5666, () => {
    console.log('server is running at http://localhost:5666')
})