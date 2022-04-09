<template>
  <li class="item">
    <input type="checkbox" :checked="todo.done" v-model="check" @change="checkedTodo(todo.id)" >
    <span :class="active">{{todo.title}}</span>
    <a href="javascript:void(0)">删除任务</a>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  // 接收 MyItem 组件的数据并渲染
  props:['todo','changeTodo'],
  data(){
    return{
      // active:'',
      // check:
    }
  },
  methods:{
    checkedTodo(id){
      // 将接收到的 id形参 传回 Vue 组件的 changeTodo 函数
      this.changeTodo(id)
    },
    // checkActive(done){
    //   if (done){
    //     this.active = ''
    //     // this.check = true
    //   }else {
    //     this.active = 'active'
    //     // this.check = false
    //   }
    // }
  },
  // mounted() {
  //   if (this.check) this.active = 'active'
  // }
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
    &.active{
      color: #999;
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