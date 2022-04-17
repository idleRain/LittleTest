<template>
  <div id="app">
    <!--    作用域插槽-->
    <CategoryList>
<!--      接收传过来的数据，必须使用 template 标签，传过来的数据为 data 中的属性之一 -->
      <template slot-scope="videoList">
        <ul>
          <li v-for="v in videoList.videos" :key="v">{{v}}</li>
        </ul>
      </template>
    </CategoryList>
    <CategoryList>
      <template slot-scope="{videos}">
        <ol>
          <li v-for="v in videos" :key="v">{{v}}</li>
        </ol>
      </template>
    </CategoryList>
    <CategoryList>
      <template slot-scope="{videos}">
          <h4 v-for="v in videos" :key="v">{{v}}</h4>
      </template>
    </CategoryList>
  </div>
</template>

<script>
import CategoryList from "@/components/CategoryList";

export default {
  name: 'App',
  components: {CategoryList},
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

</style>