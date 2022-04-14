<template>
  <div>
    <h2>学生名：{{student}}</h2>
    <button @click="chuan">点我传学生名</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js"
export default {
  name: "MySchool",
  data(){
    return {
      student:'小丁',
    }
  },
  methods:{
    chuan(){
      // 发布消息时的消息名要与订阅消息的消息名一直
      // pubsub.publish('消息名',数据)
      pubsub.publish('hello',this.student)
    }
  }
}
</script>

<style scoped>

</style>