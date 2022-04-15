<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏-过度</button>
    <transition name="hello" appear>
      <h1 v-show="isShow">{{ msg }}</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'TestDemo',
  data() {
    return {
      msg: '你好呀~',
      isShow: true
    }
  },
  methods: {}
}
</script>

<style scoped>
h1 {
  background-color: skyblue;
  /*transition: .4s linear;*/
}
.hello-enter-active,.hello-leave-active{
  transition: .5s linear
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