// exports 默认是一个空对象 , 可以追加属性
module.exports.username = '小丁'
module.exports.sayHello = () => {
    console.log('Hello world')
}

// 新对象会把原对象覆盖
module.exports = {
    username: '老丁',
    sayHi(){
        console.log('Hi world')
    }
}

// 如果导出的是函数，那么接受的默认就是函数
module.exports = () => {
    console.log('我是一个函数')
}