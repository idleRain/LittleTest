<template>
  <div class="item">
    <h3>电影列表</h3>
<!--    将数据传给插槽的使用者（内容）-->
    <slot :videos="videos">
      没有内容就显示我
    </slot>
  </div>
</template>

<script>
export default {
  name: "CategoryList",
  data() {
    return {
      videos: ['《老无所依》', '《海边的曼彻斯特》', '《海蒂和爷爷》', '《超脱》']
    }
  }
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

  ul,ol {
    li {
      line-height: 30px;
    }
  }
}
</style>