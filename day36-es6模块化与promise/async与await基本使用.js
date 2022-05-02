/*
*  函数前加 async 关键字 ，那么这个函数会变成 异步函数
*  1. 没有 return  那么返回一个空 promise
*  2. 返回 非promise ，那么会变成一个 promise
*  3. 返回 promise ，正常返回
* */
import fs from "fs";

async function f1() {
    return '我是非 promise 返回值'
}
async function f2() {
    return reader('./files/2.txt')
}
function reader(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (error, dataStr) => {
            if (error) return reject(error.message)
            resolve(dataStr)
        })
    })
}

f1().then(res => console.log(res))
f2().then(res => console.log(res))

// async await 解决读取文件
async function getFiles() {
    const p1 = await reader('./files/1.txt')
    const p2 = await reader('./files/2.txt')
    const p3 = await reader('./files/3.txt')
    console.log(p1,p2,p3)
}
await getFiles()