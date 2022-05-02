/*
* node 默认支持 common.js 模块化规范
* 若想在 node.js 中使用 es模块化导出 ，需要在 package.json 配置文件中添加配置项 : "type": "module",
*/

// n2 无法被访问，因为没有导出
const n2 = 20

// 默认导出 export default {导出对象}
export default {
    n1:10,
    show(){
        return 'I am show()'
    }
}

// 一个模块中不能有多个默认导出
/*export default {
    n2
}*/
