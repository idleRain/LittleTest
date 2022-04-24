import Vue from 'vue'
import App from './App.vue'
// 引入 Element-UI 组件库
// 引入 Element-UI 全部样式
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

//按需引入 ， 需要先 npm install babel-plugin-component -D 安装 babel什么这玩意，其次修改 babel.config.js 配置文件
import { Button, DatePicker, Row } from 'element-ui';
Vue.component('ding-button', Button)
Vue.component('ding-date-picker', DatePicker)
Vue.component('ding-row', Row )

Vue.config.productionTip = false
// 应用 Element-UI
// Vue.use(ElementUI);


new Vue({
    render: h => h(App),
}).$mount('#app')
