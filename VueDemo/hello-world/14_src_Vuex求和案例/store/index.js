// 引入 vue
import Vue from "vue";
// 引入 vuex
import Vuex from "vuex";
// 应用 vuex
Vue.use(Vuex)

// 准备 actions , 用于相应组件中的动作
const actions = {
    // 两个参数,第一个：上下文（小store）,第二个：传进来的参数
    add(context, value) {
        context.commit('ADD', value)
    },
    reduce(context, value) {
        context.commit('REDUCE', value)
    },
    addOdd(context, value) {
        if (context.state.num % 2) {
            context.commit('ADD', value)
        }
    },
    addWhit(context, value) {
        setTimeout(() => {
            context.commit('ADD',value)
        }, 500)
    }
}

// 准备 mutations , 用于操作数据（ state ）
const mutations = {
    // 两个参数,第一个：state ,第二个：传进来的参数
    ADD(state, value) {
        state.num += value
    },
    REDUCE(state, value) {
        state.num -= value
    }
}

// 准备 state , 用于储存数据
const state = {
    num: 0
}

// 创建并暴露 vuex 中的 store
export default new Vuex.Store({
    actions,
    mutations,
    state
})