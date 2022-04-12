<template>
  <div id="app">
    <!--    将函数传给 MyHeader 进行添加数据-->
    <MyHeader :addTodo="addTodo"></MyHeader>
    <!--    将数据传给 MyList 进行渲染-->
    <MyList :todos="todos"
            :changeTodo="changeTodo"
            :removeItem="removeItem">
    </MyList>
    <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearDone="clearDone"></MyFooter>
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

      // 这种方法可以不使用 mounted() 生命周期钩子
      // todos: JSON.parse(localStorage.getItem('todo-data')) || []
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
    },
    checkAllTodo(value) {
      this.todos.forEach(todo => {
        todo.done = value
      })
    },
    clearDone() {
      if (confirm('确认删除吗？')) this.todos = this.todos.filter(item => item.done !== true)
    },

    //删除数据，根据 MyItem 组件传过来的 id 参数做判断
    // find 写法
    /*removeItem(id){
      const index = this.todos.find((item,index) => {
        if (item.id === id){
          return index
        }
      })
      this.todos.splice(index,1)
    }*/

    // filter 写法，每次都会返回新数组，写法简洁但可能会耗费更多性能
    /*removeItem(id){
      this.todos = this.todos.filter(item => item.id !== id)
    }*/

    // forEach 遍历数组写法
    removeItem(id) {
      this.todos.forEach((item, index) => {
        if (item.id === id) {
          this.todos.splice(index, 1)
          return 0
        }
      })
    }
  },
  // 监视 todos ，数据发生改变时修改本地储存
  watch: {
    todos: {
      //开启深度监视
      deep: true,
      handler(value) {
        localStorage.setItem('todo-data', JSON.stringify(value))
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

}
</style>