<template>
  <div>
    <h2>学校名：{{school}}</h2>
    <h3 v-show="shou">我收到啦{{shou}}</h3>
  </div>
</template>

<script>
export default {
  name: "MySchool",
  data(){
    return {
      school:'黑马',
      shou:''
    }
  },
  mounted() {
    // 收数据，这里回调函数需要用到箭头函数
    this.$bus.$on('hello',data => {
      this.shou = data
    })
  },
  // 组件销毁前的钩子
  beforeDestroy() {
    // 销毁 hello 自定义事件
    this.$bus.$off('hello')
  }
}
</script>