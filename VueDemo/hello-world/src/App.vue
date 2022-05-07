<template>
  <div>
    <div class="link">
      <router-link to="/work1" active-class="active">作业1</router-link>
      <router-link to="/work2" active-class="active">作业2</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
<style lang="less">
.link {
  display: flex;
  a{
    padding: 5px 10px;
    margin: 10px;
    color: #333;
    text-decoration: none;
    border-radius: 5px;
    &.active{
      background: #e0e0e0;
    }
  }
}
</style>