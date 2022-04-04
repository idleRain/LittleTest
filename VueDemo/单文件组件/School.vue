<script>
import Student from "./Student";
export default {
  name:'School',
  data() {
    return {
      schoolName: '黑马程序员',
      schoolDizhi: '武汉黄陂'
    }
  },
  components:{
    Student
  }
}
// 统一暴露
// export {school}
// 默认暴露
// export default school
</script>
<template>
  <div class="demo">
    <h2>{{ schoolName }}</h2>
    <h2>{{ schoolDizhi }}</h2>
    <Student></Student>
  </div>
</template>
<style>
.demo {
  background: pink;
}
</style>