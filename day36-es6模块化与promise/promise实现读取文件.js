import fs from 'fs'
// 需求 ：读文件 结果 111 ==> 222 ==> 333

// 实现方法 ：promise
function reader(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (error, dataStr) => {
            if (error) return reject(error.message)
            resolve(dataStr)
        })
    })
}

reader('./files/1.txt').then(res1 => {
    console.log(res1)
    return reader('./files/2.txt')
}).then(res2 => {
    console.log(res2)
    return reader('./files/3.txt')
}).then(res3 => {
    console.log(res3)
}).catch(error => {
    console.log(error)
})