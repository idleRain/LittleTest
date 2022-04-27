// 导入自定义模块
const user = require('./module.exports导出')

const newUser = require('./exports导出注意事项')

// console.log(user.username)
// user.sayHello()      原对象属性和方法被覆盖，无法输出
// user.sayHi()

// 接收的是一个函数 , 可以直接调用
user()  // 我是一个函数

// 导入以 module.exports 为主
console.log(newUser)  // { username: '小丁', age: 3, sayHello: [Function (anonymous)] }