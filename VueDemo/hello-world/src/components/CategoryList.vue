<template>
  <div class="item">
    <h3>{{ title }}列表</h3>
<!--    定义一个插槽，用来装组件标签里面放的标签体内容   -->
    <slot name="head">
<!--    没有传递标签体时则显示下面内容，有则不显示   -->
      <ul>
        <li v-for="(item,index) in listData" :key="index">{{ item }}</li>
      </ul>
    </slot>
    <slot name="foot">
      哈哈哈哈
    </slot>
  </div>
</template>

<script>
export default {
  name: "CategoryList",
  props:['listData','title']
}
</script>

<style lang="less" scoped>
.item {
  background: skyblue;
  width: 200px;
  height: 300px;

  h3 {
    background: orange;
    text-align: center;
  }
  ul{
    li{
      line-height: 30px;
    }
  }
}
</style>