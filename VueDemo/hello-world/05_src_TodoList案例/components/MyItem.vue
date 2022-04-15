<template>
  <li class="item">
    <label :for="todo.id">
      <input type="checkbox"
             :checked="todo.done"
             :id="todo.id"
             @change="checkedTodo(todo.id)"
      >
      <!-- 根据 todo.done 动态绑定 类名 -->
      <span v-show="!todo.isEdit" :class={active:todo.done}>{{ todo.title }}</span>
      <input v-show="todo.isEdit"
             :value="todo.title"
             ref="edit"
             @blur="handlerBlur(todo,$event)"
             @keyup.enter="handlerBlur(todo,$event)"
             type="text">
    </label>
    <div>
      <a href="javascript:void(0)" v-show="!todo.isEdit" @click="handlerEdit(todo)">编辑</a>
      <a href="javascript:void(0)" @click="handlerRemove(todo.id)">删除</a>
    </div>
  </li>
</template>

<script>

export default {
  name: "MyItem",
  // 接收 MyItem 组件的数据并渲染
  props: ['todo', 'changeTodo', 'removeItem'],
  methods: {
    checkedTodo(id) {
      // 将接收到的 id形参 传回 Vue 组件的 changeTodo 函数
      this.changeTodo(id)
    },
    // 将此 item 的 id 属性传回 Vue 组件
    handlerRemove(id) {
      if (confirm('确认删除吗？')) {
        this.removeItem(id)
        console.log('')
      }
    },
    // 编辑
    handlerEdit(todo) {
      if (todo.isEdit !== undefined) {
        todo.isEdit = true
      } else {
        this.$set(todo, 'isEdit', true)
      }
      // dom 模板解析完后执行
      this.$nextTick(function () {
        this.$refs.edit.focus()
      })
    },
    // 传回修改数据
    handlerBlur(todo, e) {
      todo.isEdit = false
      if (!e.target.value.trim()) return
      this.$bus.$emit('updateTodo', todo.id, e.target.value)
    }
  }
}
</script>

<style lang="less" scoped>
.item {
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 30px;
  line-height: 30px;
  transition: all .4s;
  color: #333;

  input {
    margin: 0 10px 0 8px;
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

  div {
    display: flex;

    a {
      display: none;
      margin: 4px 5px 0;
      padding: 0 4px;
      height: 20px;
      border-radius: 3px;
      color: #fff;
      text-align: center;
      font-size: 12px;
      line-height: 20px;
      text-decoration: none;
    }

    a:nth-child(1) {
      background: #90c9e0;
    }

    a:last-child {
      background: #e95955;
    }
  }

  &:hover {
    background: #ededed;
  }

  &:hover div a {
    display: block;
  }

  input[type="text"] {
    border: none;
    margin-left: -3px;
    padding-left: 3px;
    height: 20px;
    border-bottom: 1px solid #999;
    background-color: transparent;
    outline: none;
    font-size: 16px;
  }
}


</style>