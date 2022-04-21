<template>
  <div>
    <ul>
      <li v-for="m in message" :key="m.id">
        <!--字符串写法-->
        <!--<router-link :to="`/home/message/detail?id=${m.id}&content=${m.content}`" >{{m.title}}</router-link>-->

        <!--对象写法-->
        <router-link :to="{
          path:'/home/message/detail',
          query:{
            id:m.id,
            content:m.content
          }
        }">
          {{ m.title }}
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "HomeMessage",
  data() {
    return {
      message: [
        {
          id: '001',
          title: '信息1',
          content: '确实是信息1呀'
        },
        {
          id: '002',
          title: '信息2',
          content: '确实是信息2呀'
        },
        {
          id: '003',
          title: '信息3',
          content: '确实是信息3呀'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>