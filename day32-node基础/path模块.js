const path = require('path')
// 路径拼接
console.log(path.join('a','/b','/c','../d','/e'))
// 相对路径拼接成绝对路径
console.log(path.join(__dirname,'files/test1.txt'))