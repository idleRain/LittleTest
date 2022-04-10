<template>
  <li class="item">
    <label :for="todo.id">
      <input type="checkbox"
             :checked="todo.done"
             :id="todo.id"
             @change="checkedTodo(todo.id);checkActive(todo.done)"
      >
      <span :class="active">{{ todo.title }}</span>
    </label>
    <a href="javascript:void(0)" @click="handlerRemove(todo.id)">删除事项</a>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  // 接收 MyItem 组件的数据并渲染
  props: ['todo', 'changeTodo','removeItem'],
  data() {
    return {
      active: '',
      // check:false
    }
  },
  methods: {
    checkedTodo(id) {
      // 将接收到的 id形参 传回 Vue 组件的 changeTodo 函数
      this.changeTodo(id)
    },
    checkActive(done) {
      console.log(111)
      if (this.todo.done || done) {
        this.active = 'active'
      } else {
        this.active = ''
      }
    },
    // 将此 item 的 id 属性传回 Vue 组件
    handlerRemove(id){
      if (confirm('确认删除吗？')){
        this.removeItem(id)
      }
    }
  },
  mounted() {
    this.checkActive()
  }
}
</script>

<style lang="less" scoped>
.item {
  position: relative;
  height: 30px;
  line-height: 30px;
  color: #333;

  input {
    margin: 0 5px 0 8px;
  }

  span {
    position: relative;
    transition: all .2s;
    font-size: 16px;

    &.active {
      color: #999;
      text-decoration: line-through;
    }
  }

  a {
    position: absolute;
    display: none;
    padding: 0 4px;
    height: 20px;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    background: #e95955;
    border-radius: 3px;
    color: #fff;
    text-align: center;
    font-size: 12px;
    line-height: 20px;
    text-decoration: none;
  }

  &:hover {
    background: #ededed;
  }

  &:hover a {
    display: block;
  }
}
</style>