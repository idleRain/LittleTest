// module.exports === exports  // true
exports.username = '小丁'
exports.age = 3
exports.sayHello = () => {
    console.log('Hello world')
}

// 导出永远会以 module.exports 为主
exports = {
    username: '老丁',
    age: 4,
    sayHi() {
        console.log('Hi world')
    }
}

