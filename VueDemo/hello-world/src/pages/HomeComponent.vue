<template>
  <div>
    <h2>我是HomeComponent组件啦</h2>
  </div>
</template>

<script>
export default {
  name: "HomeComponent",
  mounted() {
    console.log('HomeComponent组件被挂载了')
  },
  beforeDestroy() {
    console.log('HomeComponent组件要被销毁了')
  }
}
</script>