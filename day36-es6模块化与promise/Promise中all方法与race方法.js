import fs from 'fs'

function reader(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (error, dataStr) => {
            if (error) return reject(error.message)
            resolve(dataStr)
        })
    })
}

// Promise.all() 执行数组所有异步操作
Promise.all([reader('./files/1.txt'), reader('./files/2.txt'), reader('./files/3.txt')])
    .then(([r1, r2, r3]) => {
        console.log(r1, r2, r3)
    })

// Promise.race 当有一个异步操作执行完毕时， then() 方法中获取的是最先完成的结果
Promise.race([reader('./files/1.txt'), reader('./files/2.txt'), reader('./files/3.txt')])
    .then(resolve => {
        console.log(resolve)
    })