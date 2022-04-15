<template>
  <div id="app">
    <button @click="getStudentsData">我要请求学生数据啦</button>
    <button @click="getCarsData">我要请求汽车数据啦</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'App',
  methods: {
    getStudentsData() {
      // url 需要加上自己配的前缀
      axios.get('http://localhost:8080/atguigu/students').then(
          response => {
            console.log('请求成功',response.data)
          },
          error => {
            console.log('请求失败',error.message)
          }
      )
    },
    // url 需要加上自己配的前缀
    getCarsData(){
      axios.get('http://localhost:8080/heima/cars').then(
          response => {
            console.log('请求成功',response.data)
          },
          error => {
            console.log('请求失败',error.message)
          }
      )
    }
  }
}
</script>