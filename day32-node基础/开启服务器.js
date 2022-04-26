// 导入http
const http = require('http')
// 创建服务器实例
const server = http.createServer()
// 监听客户端请求
server.on('request', (req, res) => {
    // req : 请求对象
    // res : 响应对象
    // end() 方法的数据返回到客户端，放在响应体里
    res.end('Hello , Mother fucker ~')
})
// 开启服务器
server.listen(5555, () => {
    console.log('server is running at http://127.0.0.1:5555')
})