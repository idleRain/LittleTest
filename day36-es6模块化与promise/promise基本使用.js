import fs from 'fs'

const promise = new Promise((resolve, reject) => {
    fs.readFile('files/1.txt', 'utf-8', (error, dataStr) => {
        // 如果失败将错误信息传给 reject()
        if (error) return reject(error.message)
        // 成功则将读取到的文件传给 resolve()
        resolve(dataStr)
    })
})

// 第一个回调 ：成功 ；第二个回调 ：失败
/*
promise.then(
    data => console.log(data),
    error => console.log(error)
)
*/

// 有时 .then() 的失败回调可以不写，用 .catch() 来捕获失败
// .finally() 不论成功和失败 ，都会执行
promise
    .then(data => console.log(data))
    .catch(error => console.log(error))
    .finally(() => console.log('成功和失败我 finally() 都会执行'))