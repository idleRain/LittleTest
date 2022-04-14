<template>
  <div>
    <h2>学校名：{{ school }}</h2>
    <h3 v-show="shou">我收到啦@{{ shou }}</h3>
  </div>
</template>

<script>

// 消息发布与订阅需要安装 pubsub-js库， 安装方法 npm install pubsub-js
import pubsub from "pubsub-js";     //引入

export default {
  name: "MySchool",
  data() {
    return {
      school: '黑马',
      shou: ''
    }
  },
  methods:{
    demo(msgName,data){
      this.shou = data
      console.log('有人发布了hello消息，hello消息的回调执行了',msgName,data)
    }
  },
  mounted() {
    // 订阅消息，订阅时会返回一个 消息id
    // this.pubId = pubsub.subscribe('消息名',回调函数(消息名,数据))
    // this.pubId = pubsub.subscribe('hello', (msgName, data) => {
    //   console.log('有人发布了hello消息，hello消息的回调执行了',msgName,data)
    // })

    // 推荐写法，调用函数，这样好调整 this 指向
    this.pubId = pubsub.subscribe('hello',this.demo)
  },
  // 组件销毁前的钩子
  beforeDestroy() {
    // 销毁消息订阅，根据 消息id
    pubsub.unsubscribe(this.pubId)
  }
}
</script>