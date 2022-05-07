<template>
  <div>
    <div class="box">
      <!-- 无id时, 可以使用index(反正也是就地更新) -->
      <label v-for="(item,index) in arr" :key="index" style="margin: 5px">
        <input v-model="isArr" :value="item" type="checkbox"/>
        <span>{{ item }}</span>
      </label>
    </div>
    <p>你选中的元素, 累加的值和为: {{ total }}</p>
  </div>
</template>

<script>
export default {
  name: "MyWord2",
  data() {
    return {
      arr: [9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
      isArr: []
    }
  },
  computed: {
    total() {
      return this.isArr.reduce((prev, item) => prev + item, 0)
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  display: flex;

  span {
    user-select: none;
  }
}
</style>