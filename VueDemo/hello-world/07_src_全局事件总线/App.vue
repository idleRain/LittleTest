<template>
  <div id="app">
    <MySchool></MySchool>
    <MyStudent></MyStudent>
  </div>
</template>

<script>
import MySchool from "@/components/MySchool";
import MyStudent from "@/components/MyStudent";

export default {
  name: 'App',
  components: {
    MySchool,
    MyStudent
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
