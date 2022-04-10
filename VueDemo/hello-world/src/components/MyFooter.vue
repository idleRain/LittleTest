<template>
  <div class="footer" v-show="total">
    <div>
      <input type="checkbox" v-model="isAll">
      <span>已完成{{ completeTodo }} / 全部{{ total }}</span>
    </div>
    <a href="javascript:void(0)">清除已完成任务</a>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ['todos','checkAllTodo'],
  computed: {
    total() {
      return this.todos.length
    },
    completeTodo() {
      return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
    },
    isAll: {
      get(){
        return this.total === this.completeTodo && this.total > 0
      },
      set(value){
        console.log('@',value)
        this.checkAllTodo(value)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.footer {
  display: flex;
  margin-top: 10px;
  justify-content: space-between;

  div {
    font-size: 12px;

    input {
      margin: 4px 15px 0 4px;
    }
  }

  a {
    padding: 0 4px;
    height: 20px;
    background: #e95955;
    border-radius: 3px;
    color: #fff;
    text-align: center;
    font-size: 12px;
    line-height: 20px;
    text-decoration: none;
  }
}
</style>