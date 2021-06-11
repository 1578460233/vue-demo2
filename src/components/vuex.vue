<template>
  <div>
    <p>{{ count }}</p>
    <p>{{ $store.state.shu }}</p>
    <!--  <p>{{ jisuan }}</p> -->
    <button @click="add">增加</button>
    <button @click="del">减少</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex"; //简单方法
export default {
  computed: {
    ...mapState(["shu"]), //简单方法
    ...mapGetters(["xxx"]),

    //
    count() {
      return this.$store.state.shu; //可以在计算属性中拿state数据，也可以直接用$store.state.shu
    },
    /*  jisuan() {
      return this.$store.getters.xxx;
    }, */
  },

  methods: {
    ...mapActions(["yibuadd", "yibudel"]), //简单方法
    ...mapMutations(["ADD", "DEL"]),
    //
    add() {
      //this.$store.commit("ADD"); //通过commit调用mutations
      // this.$store.dispatch("yibuadd");
      this.ADD();
    },
    del() {
      // this.$store.commit("DEL"); //通过commit调用mutations
      // this.$store.dispatch("yibudel");
      this.yibudel();
    },
  },
};
</script>

<style lang="less" scoped></style>
