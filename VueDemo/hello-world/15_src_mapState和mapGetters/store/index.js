// 引入 vue
import Vue from "vue";
// 引入 vuex
import Vuex from "vuex";
// 应用 vuex
Vue.use(Vuex)

// 准备 state , 用于储存数据

const state = {
    num: 9,
    student:'小丁',
    school:'麻省理工'
}
const getters = {
    bigSum(state){
        return state.num * 10
    }
}

// 创建并暴露 vuex 中的 store
export default new Vuex.Store({
    state,
    getters
})