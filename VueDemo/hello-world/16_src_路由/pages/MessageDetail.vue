<template>
  <div>
    <hr>
<!--    query 接收参数-->
<!--    <p>{{$route.query.id}}</p>-->
<!--    <p>{{$route.query.content}}</p>-->

<!--    params 接收参数-->
    <p ></p>
    <p>{{$route.params.id}}</p>
    <p>{{$route.params.content}}</p>
  </div>
</template>

<script>
export default {
  name: "MessageDetail"
}
</script>

<style scoped>

</style>