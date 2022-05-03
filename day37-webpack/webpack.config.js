// webpack.config.js是webpack的配置文件
const path = require("path")

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const cleanPlugin = new CleanWebpackPlugin();

const HtmlPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlPlugin({
  template: path.join(__dirname, 'public', 'index.html'), // public中，你的html叫什么
  filename: 'index.html' // 打包后的html叫什么（这个文件会生成到dist文件夹）
});

module.exports = {

    // source-map 仅限在开发模式中使用
    //（开发中，程序员需要排错，需要准确的定位错误行号）
    // devtool: 'source-map',

    // nosources-source-map 适合生产环境。
    //（生产环境，我们不希望别人看到我们的源码，这个配置项只显示行号，但不会显示源码）
    devtool: 'nosources-source-map',

    // 模式
    mode:"development",      // development开发  production产品

    // 入口
    entry:path.join(__dirname,'src','index.js'),

    // 出口
    output:{
        path:path.join(__dirname,'dist'),
        filename:'js/bundle.js'
    },

    // 插件
    plugins:[cleanPlugin,htmlPlugin],

    // 模块
    module:{
        rules:[
            // 处理css样式
            {test: /\.css$/,use:['style-loader','css-loader']},
            // 处理less文件
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
             // 处理图片文件
            {test: /\.(jpg|png|gif)$/, type: 'asset'},
             // .js 文件使用 babel-loader去处理。但是不要处理 node_moduels文件夹中的第三方模块
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
        ]
    },


    // 开发服务器的配置选项
    devServer:{
        port:3000,
        open:true
    }
}