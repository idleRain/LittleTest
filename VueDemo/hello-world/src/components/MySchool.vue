<template>
  <div>
    <h2>学校名：{{school}}</h2>
    <button @click="clickBtn">点我传学校名</button>
    <button @click="removeEvent">点我销毁事件</button>
    <button @click="death">点我三秒后销毁组件</button>
  </div>
</template>

<script>
export default {
  name: "MySchool",
  data(){
    return {
      school:'黑马',
    }
  },
  props:['hahaSchool'],
  methods:{
    clickBtn(){
      // 通过自定义实现 子给父传
      this.$emit('haha',this.school)
      this.$emit('demo')

      // 通过传参实现 子给父传
      // this.hahaSchool(this.school)
    },
    removeEvent(){
      this.$off('haha')    //销毁一个组件自定义事件
      // this.$off(['haha','demo'])    //销毁多个组件自定义事件
      // this.$off()         // 销毁所有组件自定义事件
    },
    death(){
      setTimeout(()=>{
        this.$destroy()
      },3000)
    }
  }
}
</script>

<style scoped>

</style>