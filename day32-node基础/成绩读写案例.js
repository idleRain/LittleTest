const fs = require('fs')
// 读取文件
fs.readFile('./files/成绩.txt', 'utf-8', (error, data) => {
    if (error) return console.log(error.message)
    // 用空格将字符串切割成数组
    const arr = data.split(' ')
    // 将 = 替换成 :
    let newArr = arr.map(item => item.replace('=', ':'))
    // 转为字符串，加 \n 换行符
    newArr = newArr.join('\n')
    // 写入文件
    fs.writeFile('./files/成绩.txt', newArr, 'utf-8', err => {
        if (err) return console.log(err.message)
        console.log('写入成功')
    })
})