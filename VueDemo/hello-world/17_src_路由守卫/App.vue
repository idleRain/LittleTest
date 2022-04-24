<template>
  <div id="App">
    <HeaderMsg></HeaderMsg>
    <div class="row">
      <div class="left">
        <router-link to="/home" active-class="active">home</router-link>
        <router-link to="/about" active-class="active">about</router-link>
      </div>
      <div class="panel">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderMsg from "@/components/HeaderMsg";

export default {
  name: 'App',
  components: {
    HeaderMsg
  }
}
</script>
<style lang="less">
#App {
  width: 1000px;
  margin: 0 auto;

  h1, h2 {
    padding-left: 20px;
  }

  .row {
    display: flex;

    .left {
      margin-right: 20px;
      a{
        display: block;
        width: 100px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #3f3f3f;
        text-decoration: none;
      }
      .active{
        background: pink;
      }
    }

    .panel {
      background: skyblue;
      border-radius: 10px;
      width: 100%;
      overflow: hidden;
    }
  }
}
</style>