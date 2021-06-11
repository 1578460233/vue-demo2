<template>
  <div class="list">
    <Item
      @btnClick="dele"
      v-for="(item, index) in list"
      :key="index"
      :item="item"
      :index="index"
    ></Item>
  </div>
</template>

<script>
import Item from "./item";
export default {
  components: {
    Item,
  },
  props: {
    list: Array,
  },
};
</script>
<script>
export default {
  methods: {
    dele(index) {
      this.$emit("dele", index);
    },
  },
};
</script>

<style>
.list {
  width: 100%;
  /* height: 100px; */
  border: 1px solid #eee;
  /* border-radius: 20px; */
  margin-bottom: 20px;
}
</style>
