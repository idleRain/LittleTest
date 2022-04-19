<template>
  <h1>{{msg}}</h1>
</template>

<script>
export default {
  name: "HeaderMsg",
  data(){
    return{
      msg:'Vue Router Demo'
    }
  }
}
</script>

<style scoped>
h1 {
  line-height: 80px;
  border-bottom: 1px solid #ccc;
}
</style>