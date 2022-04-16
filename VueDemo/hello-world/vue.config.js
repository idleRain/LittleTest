const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    pages: {
        index: {
            // 入口文件
            entry: 'src/main.lib'
        }
    },
    // 关闭语法提示
    // lintOnSave:false,

    // 开启代理服务器
    // 写法一（写法简单，但不能开启多个代理服务器）
    /*devServer: {
        proxy: 'http://localhost:5000'
    }*/

    // 写法二
    devServer: {
        proxy: {
            '/atguigu': {
                target: 'http://localhost:5000',
                pathRewrite:{'^/atguigu':''},   // 正则，将前缀替换为空字符串
                ws: true,       // 用于支持 websocket
                changeOrigin: true      // 用于控制请求头中的 host 值，默认为 true
            },
            '/heima': {
                target: 'http://localhost:5001',
                pathRewrite:{'^/heima':''},
            }
        }
    }
})
