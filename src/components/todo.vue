<template>
  <div class="content">
    <Header></Header>
    <List @btnClick="dele" :list="todos"></List>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./header";
import List from "./list";
import Footer from "./footer";

export default {
  components: {
    Header,
    List,
    Footer,
  },
  data() {
    return {
      todos: [
        { title: "哈哈哈哈哈哈哈哈", finished: true },
        { title: "哈哈哈哈哈哈哈哈", finished: true },
        { title: "哈哈哈哈哈哈哈哈", finished: true },
        { title: "哈哈哈哈哈哈哈哈", finished: true },
        { title: "哈哈哈哈哈哈哈哈", finished: true },
      ],
    };
  },
  methods: {
    dele(index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>

<style lang="less">
.content {
  margin: 0 auto;
  border: 1px solid #ccc;
  width: 600px;
  /* height: 300px; */
  border-radius: 10px;
  box-sizing: border-box;
  padding: 10px;
}
</style>
