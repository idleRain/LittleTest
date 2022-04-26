// 引入 fs
const fs = require('fs')

// readFile( 文件路径 , 读取格式 , 回调函数(error , data) )
/*
* 参数1：读取地址
* 参数2：字符编码
* 参数3：读取结果回调函数
* */
fs.readFile('./files/test1.txt', 'utf-8', (error,data) => {
    if (error) throw error
    console.log(data)
})