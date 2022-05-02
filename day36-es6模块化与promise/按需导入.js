// 按需导入的名字必须和按需导入的变量名一致
// 按需导入的名字可以通过 as 重命名
import {n1 as n_one, show} from './按需导出.js'

console.log(n_one)
console.log(show)