<template>
  <div>
    <h2>学生名：{{student}}</h2>
    <button @click="chuan">点我传学生名</button>
  </div>
</template>

<script>
export default {
  name: "MySchool",
  data(){
    return {
      student:'小丁',
    }
  },
  methods:{
    chuan(){
      // 传数据
      this.$bus.$emit('hello',this.student)
    }
  }
}
</script>

<style scoped>

</style>