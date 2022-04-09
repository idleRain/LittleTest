<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>{{name}}</h2>
    <h2>{{age}}</h2>
    <button @click="showMsg">点我点我</button>
  </div>
</template>

<script>
import {hunhe} from '@/mixin'
export default {
  name: "SchoolStudent",
  // 混入的 data 和自身的 data 会冲突，以组件自身的为主
  data(){
    return {
      msg:'hello啊，树哥！',
      name:'小小小丁'
    }
  },
  // 注册混入
  mixins:[hunhe],
  //混入的生命周期钩子和自身的生命周期钩子不冲突，都会执行，但会先执行混入的
  mounted() {
    console.log('哈哈哈 树哥')
  }
}
</script>
