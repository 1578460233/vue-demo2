<template>
  <div>
    <div class="item">
      <input type="checkbox" v-model="item.finished" />
      <span>{{ item.title }}</span>
      <button class="dele" @click="dele">删除</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    index: Number,
  },
  data() {
    return {};
  },
  methods: {
    dele() {
      this.$emit("dele", this.index);
    },
  },
};
</script>

<style lang="less">
.item {
  line-height: 40px;
  padding: 0px 10px;
  border-bottom: 1px solid #eee;
  &:hover .dele {
    display: block;
  }
  &:hover {
    background-color: #ccc;
  }
}
.item input {
  margin-right: 10px;
  cursor: pointer;
}
.item span {
  font-size: 16px;
}
.item:last-child {
  border-bottom: none;
}
.dele {
  display: none;
  padding: 10px;
  border-radius: 10px;
  line-height: 10px;
  font-size: 16px;
  float: right;
  margin-top: 5px;
  background-color: #dddd43;
  color: #fff;
  border: none;
  cursor: pointer;
}
</style>
