<template>
  <div>
    <h2>当前求和为{{ $store.state.num }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add(n)">+</button>
    <button @click="reduce(n)">-</button>
    <button @click="addOdd(n)">为奇数再加</button>
    <button @click="addWhit(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapActions,mapMutations} from 'vuex'

export default {
  name: "CountOperation",
  data() {
    return {
      n: 1,
    }
  },
  methods: {
   /*add() {
      this.$store.commit('ADD', this.n)
    },
    reduce() {
      this.$store.commit('REDUCE', this.n)
    },
    addOdd() {
      this.$store.dispatch('addOdd', this.n)
    },
    addWhit() {
      this.$store.dispatch('addWhit', this.n)
    },*/

    // 简写
    ...mapMutations({add:'ADD',reduce:'REDUCE'}),
    ...mapActions(['addOdd','addWhit'])
  }
}
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>