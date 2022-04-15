<template>
  <div id="app">
    <TestDemo/>
    <TestDemo2/>
    <TestDemo3/>
    <TestDemo4/>
  </div>
</template>

<script>

import TestDemo from "@/components/TestDemo";
import TestDemo2 from "@/components/TestDemo2";
import TestDemo3 from "@/components/TestDemo3";
import TestDemo4 from "@/components/TestDemo4";

export default {
  name: 'App',
  // 注册组件
  components: {
    TestDemo,
    TestDemo2,
    TestDemo3,
    TestDemo4
  }
}
</script>