<template>
  <div class="header">
    <h3>Search Github Users</h3>
    <p>
      <input type="text"
             placeholder="enter the name you search"
             v-model="keyWord"
      >
      <button @click="searchUsers">search</button>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "GithubHead",
  data() {
    return {
      keyWord: '',
    }
  },
  methods: {
    searchUsers(){
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
          ({data:res}) => {
            console.log(res)
            this.$bus.$emit('getUsers',res.items)
          },
          error => {
            console.log('请求失败了',error.message)
          }
      )
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  margin: 0 auto;
  padding: 20px 0 0 50px;
  width: 1000px;
  height: 100px;
  background: #ccc;

  p {
    margin-top: 10px;

    input {
      margin-right: 5px;
    }
  }
}
</style>