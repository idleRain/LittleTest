<template>
  <div>
    <h2>当前求和为{{ num }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">+</button>
    <button @click="deadd">-</button>
    <button @click="addOdd">为奇数再加</button>
    <button @click="addWiht">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "CountOperation",
  data() {
    return {
      num: 0,
      n: 1
    }
  },
  methods: {
    add() {
      this.num += this.n
    },
    deadd() {
      this.num -= this.n
    },
    addOdd() {
      if (this.num % 2) {
        this.num = this.num + this.n
      }
    },
    addWiht() {
      setTimeout(() => {
        this.num = this.num + this.n
      }, 500)
    },
  }
}
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>