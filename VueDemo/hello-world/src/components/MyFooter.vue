<template>
  <div class="footer">
    <div>
      <input type="checkbox">
      <span>已完成{{complete}} / 全部{{all}}</span>
    </div>
    <a href="javascript:void(0)">清除已完成任务</a>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  data(){
    return {
      complete:0,
      all:4
    }
  }
}
</script>

<style lang="less" scoped>
.footer{
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  div{
    font-size: 12px;
    input{
      margin: 4px 15px 0 4px;
    }
  }
  a{
    padding: 0 4px;
    height: 20px;
    background: #e95955;
    border-radius: 3px;
    color: #fff;
    text-align: center;
    font-size: 12px;
    line-height: 20px;
    text-decoration: none;
  }
}
</style>