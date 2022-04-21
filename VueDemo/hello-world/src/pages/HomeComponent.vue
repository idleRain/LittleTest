<template>
  <div class="home-content">
    <div>
      <router-link active-class="active" to="/home/news">News</router-link>
      <router-link active-class="active" to="/home/message">Message</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "HomeComponent",
 /* mounted() {
    console.log('HomeComponent组件被挂载了')
  },
  beforeDestroy() {
    console.log('HomeComponent组件要被销毁了')
  }*/
}
</script>
<style lang="less">
.home-content{
  &>div{
    display: flex;
    justify-content: start;
    a{
      display: block;
      width: 120px;
      height: 50px;
      color: #333;
      line-height: 50px;
      text-align: center;
      &.active{
        background: orange;
      }
    }
  }
}
</style>