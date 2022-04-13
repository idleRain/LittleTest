<template>
  <div id="app">
    <!--    自定义事件实现子给父传-->
<!--    <MySchool @haha="hahaSchool" @demo="m1"></MySchool>-->
<!--    native 修饰符让子组件不把 click 当自定义事件-->
    <MySchool @haha="hahaSchool" @demo="m1" @click.native="show"></MySchool>

    <!--    传参实现子给父传-->
    <!--        <MySchool :hahaSchool="hahaSchool"></MySchool>-->

    <!--    传参实现子给父传 第二种写法（需要配合生命周期钩子，但是更灵活）-->
    <!--    <MySchool ref="school"></MySchool>-->
  </div>
</template>

<script>
import MySchool from "@/components/MySchool";

export default {
  name: 'App',
  components: {
    MySchool
  },
  methods: {
    hahaSchool(name) {
      console.log('App组件收到啦', name)
    },
    m1() {
      console.log('demo事件被触发啦')
    },
    show() {
      console.log('真的在点击')
    }
  },
  mounted() {
    // this.$refs.school.$on('haha',this.hahaSchool)        //绑定自定义事件
    // this.$refs.school.$once('haha',this.hahaSchool)      //执行一次
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
