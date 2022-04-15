<template>
  <div class="row">
    <div class="card" v-for="user in users" :key="user.id">
      <a :href="user.html_url">
        <img :src="user.avatar_url" alt="">
      </a>
      <p>{{ user.login }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "GithubList",
  data() {
    return {
      users: []
    }
  },
  mounted() {
    this.$bus.$on('getUsers', (users) => {
      console.log(users)
      this.users = users
    })
  }
}
</script>

<style lang="less" scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  width: 1000px;
  margin: 20px auto;

  & > div {
    width: 200px;
    height: 200px;
    text-align: center;
    border: 1px solid #ccc;
    a{
      width: 150px;
      height: 150px;
      img {
        width: 150px;
        height: 150px;
      }
    }
  }
}
</style>