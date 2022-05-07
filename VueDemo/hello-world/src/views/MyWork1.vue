<template>
  <div>
    <p>请选择你要购买的书籍</p>
    <ul>
      <li v-for="item in arr" :key="item.name">
        {{ item.name }}
        <button @click="purchase(item.name)">购买</button>
      </li>
    </ul>
    <table border="1" width="500" cellspacing="0">
      <tr>
        <th>序号</th>
        <th>书名</th>
        <th>单价</th>
        <th>数量</th>
        <th>合计</th>
      </tr>
      <tr v-for="(item,index) in arr" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>{{ item.count }}</td>
        <td>{{ total(item.price, item.count) }}</td>
      </tr>
    </table>
    <p>总价格为: {{ totalPrice }}</p>
  </div>
</template>

<script>
export default {
  name: 'MyWork1',
  data() {
    return {
      arr: [
        {name: "水浒传", price: 107, count: 0,},
        {name: "西游记", price: 192, count: 0,},
        {name: "三国演义", price: 219, count: 0,},
        {name: "红楼梦", price: 178, count: 0,},
      ],
      // 总价
      totalPrice: 0
    }
  },
  computed: {
    // 合计
    total() {
      return (a, b) => a * b
    }
  },
  methods: {
    // 购买
    purchase(bookName) {
      const index = this.arr.findIndex(item => item.name === bookName)
      this.arr[index].count += 1
    }
  },
  watch: {
    // 监视
    arr: {
      deep: true,
      handler() {
        this.totalPrice = this.arr.reduce((prev, item) => prev + item.price * item.count, 0)
      }
    }
  }
}
</script>