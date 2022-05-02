import fs from 'fs'
// 需求 ：读文件 结果 111 ==> 222 ==> 333

// 实现方法 ：回调嵌套 ， 但会形成 ‘回调地狱’
fs.readFile('files/1.txt', 'utf-8', (error, dataStr) => {
    if (error) return console.log(error.message)
    console.log(dataStr)
    fs.readFile('files/2.txt', 'utf-8', (error, dataStr) => {
        if (error) return console.log(error.message)
        console.log(dataStr)
        fs.readFile('files/3.txt', 'utf-8', (error, dataStr) => {
            if (error) return console.log(error.message)
            console.log(dataStr)
        })
    })
})