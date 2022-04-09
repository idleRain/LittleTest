import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 全局引入混入
// import {hunhe} from "@/mixin";
// Vue.mixin(hunhe)

new Vue({
  render: h => h(App),

  //全局注册混入
  // mixins:[hunhe]

}).$mount('#app')
