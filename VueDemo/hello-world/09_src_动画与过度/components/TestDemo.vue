<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏-动画</button>
    <transition name="hello" appear>
      <h1 v-show="isShow">{{msg}}</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'TestDemo',
  data() {
    return {
      msg:'你好呀~',
      isShow:true
    }
  },
  methods:{

  }
}
</script>

<style scoped>
h1 {
  background-color: orange;
}
/*开始*/
.hello-enter-active{
  animation: donghua .4s linear;
}
/*结束*/
.hello-leave-active{
  animation: donghua .4s linear reverse;
}
@keyframes donghua {
  0%{
    transform: translateX(-100%);
  }
  100%{
    transform: translateX(0px);
  }
}
</style>