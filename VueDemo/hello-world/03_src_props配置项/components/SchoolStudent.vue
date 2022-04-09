<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>{{name}}</h2>
    <h2>{{myAge+1}}</h2>
    <h2>{{gender}}</h2>
    <button @click="click">点我</button>
  </div>
</template>

<script>
export default {
  name: "SchoolStudent",
  data(){
    return {
      msg:'hello啊，树哥！',
      myAge:this.age
    }
  },
  methods:{
    click(){
      this.myAge ++
    }
  },
  // 简单声明接收
  // props 是只读的，不可修改
  // props:['name','age','gender']

  // 接收的同时对数据的类型进行限制
  // props:{
  //   name:String,
  //   age:Number,
  //   gender:String
  // }
  // 接收的同时对数据的类型进行限制，并指定默认值 + 必要性的限制
  props:{
    name: {
      type:String,
      required:true   //必须传值
    },
    age:{
      type:Number,
      default:99      //默认值 99
    },
    gender:{
      type:String,
      required:true   //必须传值
    }
  }


}
</script>
