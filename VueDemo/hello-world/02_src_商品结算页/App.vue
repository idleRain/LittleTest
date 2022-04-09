<template>
  <div id="app">
    <GoodsList></GoodsList>
  </div>
</template>

<script>
import GoodsList from "@/components/GoodsList";

export default {
  name: 'App',
  components: {
    GoodsList
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
