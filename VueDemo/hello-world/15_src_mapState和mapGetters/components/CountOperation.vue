<template>
  <div>
    <h2>计数：{{ num }}</h2>
    <h2>放大的数：{{ bigSum }}</h2>
    <h2>学生：{{ student }}</h2>
    <h2>学校：{{ school }}</h2>
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'

export default {
  name: "CountOperation",
  computed: {
    /*num() {
      return this.$store.state.num
    },
    student() {
      return this.$store.state.student
    },
    school() {
      return this.$store.state.school
    }*/

    /*bigSum(){
      return this.$store.getters.bigSum
    },*/

    // Vuex 生成计算属性简写
    ...mapState(['num', 'student', 'school']),
    ...mapGetters(['bigSum'])
  }
}
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>