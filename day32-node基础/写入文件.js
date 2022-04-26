// 引入 fs
const fs = require('fs')

/*
 * writeFile()
 * 参数1：写入的路径  如果路径不存在会自动的创建文件
 * 参数2：写入的内容
 * 参数3：编码格式 可以省略 默认为utf8
 * 参数4：写入之后的回调函数
 * */
fs.writeFile('./files/test2.txt', '我是 writeFile() 写入的文件', 'utf-8', (error) => {
    if (error) return console.log(error.message)
    console.log('文件写入成功')
})