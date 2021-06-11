<template>
  <div>
    <p>传入子组件的名字：{{ name }}</p>
    <p>传入子组件的年龄：{{ age }}</p>
    <p>{{ p }}</p>
    <button @click="onck('李四', 19)">按钮</button>
    <!-- 可以给父元素传回去数据 -->
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, required: false, default: "姓名" },
    age: { type: Number, required: false, default: 18 },
    p: {
      type: Object,
      required: false,
      default: () => {
        return { name: "张三", age: 18 };
      },
    },
    onck: {
      type: Function,
      required: false,
      default: () => {
        alert("默认");
        return 0
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>