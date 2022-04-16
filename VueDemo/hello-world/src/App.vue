<template>
  <div id="app">
    <CategoryList title="美食" :listData="foods">
      <!--      标签体内容-->
      <img slot="head" src="https://img2.baidu.com/it/u=381412217,2118678125&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
           alt="">
      <a slot="foot" href="https://www.baidu.com">更多美食</a>
    </CategoryList>
    <CategoryList title="游戏" :listData="games">
      <template v-slot:foot>
        <div class="lala">
          <a href="https://www.baidu.com">单机游戏</a>
          <a href="https://www.baidu.com">在线游戏</a>
        </div>
      </template>
    </CategoryList>
    <CategoryList title="电影" :listData="videos">
      <video controls slot="foot" src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </CategoryList>
  </div>
</template>

<script>
import CategoryList from "@/components/CategoryList";

export default {
  name: 'App',
  components: {CategoryList},
  data() {
    return {
      foods: ['啤酒', '小龙虾', '火锅', '饺子'],
      games: ['巫师3', '黑神话：悟空', '荒野大镖客', '泰拉瑞亚'],
      videos: ['《老无所依》', '《海边的曼彻斯特》', '《海蒂和爷爷》', '《超脱》']
    }
  }
}
</script>

<style scoped>
#app {
  display: flex;
  justify-content: space-evenly;
}

img {
  width: 100%;
}

video {
  width: 100%;
}
.lala{
  display: flex;
  justify-content: space-around;
}
</style>