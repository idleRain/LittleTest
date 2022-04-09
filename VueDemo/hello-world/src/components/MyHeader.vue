<template>
  <div class="header">
    <input type="text" placeholder="请输入您的代办事项，按回车键确认" v-model="title" @keyup.enter="add">
  </div>
</template>

<script>
// 引入 nanoid ,nanoid 为分别暴露
import {nanoid} from "nanoid"

export default {
  name: "MyHeader",
  props: ['addTodo'],
  data(){
    return{
      title:''
    }
  },
  methods: {
    add() {
      // 去掉输入框空格后再判断
      if (this.title.trim()) {
        const todoObj = {id: nanoid(), title: this.title, done: false}
        console.log(todoObj)
        // 添加时调用 App 组件传过来的 addTodo 函数 ， 再将输入的数据通过函数形参传回 App 组件
        this.addTodo(todoObj)
        this.title = ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
div.header {
  input {
    width: 475px;
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 3px;
  }
}
</style>