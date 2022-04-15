<template>
  <ul class="list" v-show="todos[0]">
    <transition-group
        name="animate__animated animate__bounce"
        enter-active-class="animate__headShake"
        leave-active-class="animate__bounceOut"
        appear>
      <MyItem v-for="todo in todos" :key="todo.id" :todo="todo" :changeTodo="changeTodo" :removeItem="removeItem"/>
    </transition-group>
  </ul>
</template>

<script>
// 引入 animate.css
import 'animate.css'
import MyItem from "@/components/MyItem";

export default {
  name: "MyList",
  components: {MyItem},
  // 接收 App 组件的数据
  props: ['todos', 'changeTodo', 'removeItem']
}
</script>

<style lang="less" scoped>
.list {
  border: 1px solid #cfcfcf;
  border-radius: 3px;

  .item:not(:first-child) {
    border-top: 1px solid #cfcfcf;
  }
}
</style>