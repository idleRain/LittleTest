// 导入http
const http = require('http')
const fs = require('fs')
const path = require('path')
// 创建服务器实例
const server = http.createServer()
// 监听客户端请求
server.on('request', (req, res) => {
    fs.readFile(path.join(__dirname, 'data/data.json'), 'utf-8', (error, data) => {
        // const newData = JSON.parse(data)
        // if (error) return console.log(error)
        // console.log(newData)

        // 设置请求头，解决乱码问题
        res.writeHead(200, {
            'Content-Type': 'text/plain;charset=utf8'
        })
        res.end(data)
    })
})
// 开启服务器
server.listen(5050, () => {
    console.log('server is running at http://localhost:5050')
})