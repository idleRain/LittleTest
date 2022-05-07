<template>
  <div id="App">
    <ding-row>
      <ding-button>默认按钮</ding-button>
      <ding-button type="primary">主要按钮</ding-button>
      <ding-button type="success">成功按钮</ding-button>
      <ding-button type="info">信息按钮</ding-button>
      <ding-button type="warning">警告按钮</ding-button>
      <ding-button type="danger">危险按钮</ding-button>
    </ding-row>
    <ding-date-picker
        v-model="value2"
        align="right"
        type="date"
        placeholder="选择日期"
        :picker-options="pickerOptions">
    </ding-date-picker>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
      value1: '',
      value2: '',
    };
  }
}
</script>