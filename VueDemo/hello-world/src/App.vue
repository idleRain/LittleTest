<template>
  <div id="app">
    <SchoolStudent name="小丁" gender="男" :age="18"></SchoolStudent>
    <SchoolStudent name="小丁" gender="男"></SchoolStudent>
  </div>
</template>

<script>
import SchoolStudent from "@/components/SchoolStudent";

export default {
  name: 'App',
  components: {
    SchoolStudent
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
