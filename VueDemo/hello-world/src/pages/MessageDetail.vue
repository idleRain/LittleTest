<template>
  <div>
    <hr>
    <p>{{$route.query.id}}</p>
    <p>{{$route.query.content}}</p>
  </div>
</template>

<script>
export default {
  name: "MessageDetail"
}
</script>

<style scoped>

</style>