<template>
  <div>
    <!--展示 Tags -->
    <ul>
      <li class="tag" v-for="item in Tags" :key="item.id">
        <span>{{ item.title }}</span>
        <button @click="del(item.id)">x</button>
      </li>
    </ul>
    <!--添加 Tag -->
    <div class="new">
      <button v-if="!isShow" class="button-new-tag" @click="showAdd">+ New Tag</button>
      <input
          v-else
          @keyup.esc="newTag='';isShow=false"
          @blur="addTag"
          @keyup.enter="addTag"
          v-model.trim="newTag"
          ref="ipt"
          class="input-new-tag"
          type="text">
    </div>
  </div>
</template>

<script>
export default {
  name: "MyTags",
  data() {
    return {
      // 控制输入框是否显示
      isShow: false,
      // Tags 数据
      Tags: [
        {id: 1, title: '吃饭'},
        {id: 2, title: '睡觉'},
        {id: 3, title: '敲代码'},
      ],
      // 添加的数据
      newTag: ''
    }
  },
  methods: {
    // 点击添加按钮显示输入框
    showAdd() {
      this.isShow = true
      this.$nextTick(() => this.$refs.ipt.focus())
    },
    // 添加 Tag
    addTag() {
      if (this.newTag.length === 0) return this.isShow = false
      const newTag = {
        id: this.Tags[this.Tags.length - 1].id + 1 || 1,
        title: this.newTag
      }
      this.Tags.push(newTag)
      this.newTag = ''
      this.isShow = false
    },
    // 删除
    del(id) {
      if (confirm('确认删除吗？')) this.Tags = this.Tags.filter(item => item.id !== id)
    }
  }
}
</script>

<style lang="less" scoped>
ul {
  li {
    margin-left: 10px;
    padding: 10px 15px;
    border-radius: 5px;
    float: left;
    list-style: none;
    background: #ecf5ff;
    color: #409eff;
    border: 1px solid #409eff;

    button {
      margin-left: 10px;
      color: #4c89c7;
      line-height: 10px;
      background: none;
      border: none;
    }
  }
}

.button-new-tag {
  margin-left: 10px;
  height: 42px;
  line-height: 32px;
  padding-top: 0;
  padding-bottom: 0;
  background: #fff;
  border: 1px solid #ccc;
  font-weight: 700;
  color: #888;
}

.input-new-tag {
  width: 71px;
  height: 36px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
