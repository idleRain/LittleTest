<template>
  <div id="app">
    <h2>TodoList 代办事项</h2>
    <!--    将函数传给 MyHeader 进行添加数据-->
    <MyHeader :addTodo="addTodo"></MyHeader>
    <!--    将数据传给 MyList 进行渲染-->
    <MyList :todos="todos" :changeTodo="changeTodo"></MyList>
    <MyFooter></MyFooter>
  </div>
</template>

<script>

import MyHeader from "@/components/MyHeader";
import MyList from "@/components/MyList";
import MyFooter from "@/components/MyFooter";

export default {
  name: 'App',
  // 注册组件
  components: {
    MyHeader,
    MyList,
    MyFooter
  },
  data() {
    return {
      // 装数据的空数组对象
      todos: []
    }
  },
  methods: {
    //调用时添加对象数据到 todos 里
    addTodo(x) {
      this.todos.unshift(x)
    },
    changeTodo(id) {
      // 将传回的 id 做判断
      this.todos.forEach(todo => {
        if (todo.id === id) todo.done = !todo.done
      })
    }
  },
  // 监视 todos ，数据发生改变时修改本地储存
  watch: {
    todos: {
      //开启深度监视
      deep:true,
      handler(){
        localStorage.setItem('todo-data', JSON.stringify(this.todos))
      }
    }
  },
  // vm 渲染之前看看本地储存有没有数据，有就传给 todos
  mounted() {
    let newData = localStorage.getItem('todo-data')
    newData = newData ? JSON.parse(newData) : []
    this.todos = newData.map(item => item)
  }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}

#app {
  margin: 100px auto;
  padding: 15px;
  width: 500px;
  border: 2px solid #ccc;
  border-radius: 4px;

  h2 {
    color: #404040;
    margin-bottom: 10px;
  }
}
</style>