<template>
  <div class="row">
    <div class="card"
         v-for="user in info.users"
         v-show="info.users"
         :key="user.id">
      <a :href="user.html_url">
        <img :src="user.avatar_url" alt="">
      </a>
      <p>{{ user.login }}</p>
    </div>
    <h2 v-show="info.isFirst">欢迎使用</h2>
    <h2 v-show="info.isLoading">Loading……</h2>
    <h2 v-show="info.ErrorMsg">{{ info.ErrorMsg }}</h2>
  </div>
</template>

<script>
export default {
  name: "GithubList",
  data() {
    return {
      info: {
        users: [],
        ErrorMsg: '',
        isFirst: true,
        isLoading: false
      }
    }
  },
  mounted() {
    this.$bus.$on('updateListData', (dataObj) => {
      console.log(dataObj)
      this.info = {...this.info, ...dataObj}
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

    a {
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