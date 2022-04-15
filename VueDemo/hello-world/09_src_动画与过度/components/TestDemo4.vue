<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏-animate.css</button>
<!--    多个元素过度需要用到 transition-group 标签,并且每个子元素需要 key 属性-->
<!--    使用 animate-->
    <transition-group
        name="animate__animated animate__bounce"
        enter-active-class="animate__wobble"
        leave-active-class="animate__bounceOutUp"
        appear>
      <h1 v-show="isShow" key="1">{{ msg }}</h1>
      <h1 v-show="!isShow" key="2">{{ name }}</h1>
    </transition-group>
  </div>
</template>

<script>
// 引入 animate.css
import 'animate.css'

export default {
  name: 'TestDemo',
  data() {
    return {
      msg: '你好呀~',
      name:'小丁',
      isShow: true
    }
  },
  methods: {}
}
</script>

<style scoped>
h1 {
  background-color: #b8daff;
  transition: .8s linear;
}
</style>