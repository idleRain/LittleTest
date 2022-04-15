<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏-多个元素过度</button>
<!--    多个元素过度需要用到 transition-group 标签,并且每个子元素需要 key 属性-->
    <transition-group name="hello" appear>
      <h1 v-show="isShow" key="1">{{ msg }}</h1>
      <h1 v-show="isShow" key="2">{{ name }}</h1>
      <h1 v-show="isShow" key="3">{{ student }}</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'TestDemo',
  data() {
    return {
      msg: '你好呀~',
      name:'小丁',
      student:'同学',
      isShow: true
    }
  },
  methods: {}
}
</script>

<style scoped>
h1 {
  background-color: aquamarine;
  /*transition: .4s linear;*/
}
.hello-enter-active,.hello-leave-active{
  transition: .6s linear
}
/*进入的起点,离开的终点*/
.hello-enter,.hello-leave-to {
  transform: translateX(-100%);
}
/*进入的终点,离开的起点*/
.hello-enter-to,.hello-leaves {
  transform: translateX(0);
}
</style>