<template>
  <div id="app">
    <p>生命周期函数</p>
    <a href="https://cn.vuejs.org/images/lifecycle.png">查看生命流程图</a>
    <p>常用的几个钩子 created mounted，经常页面刚载入时候用</p>
    <p>beforeUpdata页面交互修改前，updated修改后，beforeDestroy销毁时</p>
    <hr />
    <p>组件通信</p>
    <p>1.props 2.自定义事件 3.消息订阅与发布 4.vuex</p>
    <hr />
    <p>props传递时除了字符串类型其他都要动态绑定 ：</p>
    <!-- 适用于父向子传递数据 -->
    <!-- 很简单，只需要绑定上去子组件就能接收到  函数--父组件可以拿到子组件携带的参数-->
    <Props name="张三" :age="18" :p="pppp" :onck="ck"></Props>
    <hr />
    <p>自定义事件</p>
    <!-- 适用于子向父传递数据 子组件只是报告，事件还在父组件里-->
    <!-- 子组件只是打个报告，父组件专门监听这个报告，事件还是在父组件里实现  函数--父组件也可以拿到子组件携带的参数-->
    <Emit ref="emt" @btnClick="btnClick"></Emit>
    <!-- 也可以这样写- mounted()渲染完成 this.$refs.emt.$on('btnClick',this.btnClick)-->
    <hr />
    <!-- 需要操作数据必须在有数据的组件写方法，通过传递给其他组件 -->

    <!-- <button @click="istodo = !istodo">打开/关闭todo案例</button> -->
    <!-- <Todo v-if="istodo"></Todo> -->

    <!-- watch深度监听（可以监听到属性值的变化 
    deep：true开启
    immediate：fasle 是否一上来就执行一遍
    handler() 回调函数
    ） -->
    <hr />
    <p>pubsub插件：3.发布订阅</p>
    <!--mounted() 下绑定订阅
   订阅  PubSub.subscribe("发布名",(msg,token)=>{
     msg 如果多个订阅的话可以用它辨别类型
     token 数字
   })
   发布 PubSub.publish("发布名",参数)
     -->
    <hr />
    <p>插槽</p>
    <p>slot标签，如果需要绑定插槽需要给name属性</p>
    <!-- <Footer>
      <p slot="name">我是插进去的内容</p>
    </Footer> 
    插槽的内容使用本页面的数据
    -->
    <hr />
    <p>路由导航</p>
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/about" tag="span">关于</router-link>
    <router-link to="/about" active-class="myclas">关于</router-link>
    <!-- tag 渲染成啥标签 -->
    <!-- active-class="myclas" 高亮显示-->
    <!-- <router-link to="/about/张三">关于</router-link>  可以加参数 -->

    <p>路由出口</p>
    <!-- 用keep-alive标签包裹路由出口可以实现数据缓存，（切换页面不总是请求加载） -->
    <router-view class="view"></router-view>
    <hr />
    <!-- 
      route信息
      --fullPath 路由地址的所有地址信息/home/mine/张三？哈哈哈？你
      --params  动态路由匹配到的信息{name:'张三',age:18}
      --path  已经配置到的路由信息//home/mine/张三
      --query   ？后面的内容--/home?name=张三&age=19   {name:'张三',age:19}
      router信息
      --routes：路由index.js页面那些配置信息
     -->
    <p>局部路由的三个钩子</p>
    <pre>
      beforeRouteEnter(to,from,next){next();}
      beforeRouteUpdata
      beforeRouteLeave
      通常是在页面中放入
      也可以吧钩子放进route的index
    </pre>
    <hr />
    <p>vuex</p>
    <p>State:存放数据的地方</p>
    <p>mutations:存放操作state的方法(同步)</p>
    <p>actions:存放多个方法（可以异步）</p>
    <p>getters:是vuex中的计算函数 页面中可以在计算函数中直接调用</p>
    <hr />
    <p>界面中的vuex操作</p>
    <pre>
  this.$store.state.shu    //计算属性中展开
  this.$store.getters.xxx //计算属性中展开
  $store.commit("ADD")    //函数
  $store.dispatch("yibuadd")  //函数

  //store中

  state: {
    //数据放这
    shu: 0,
    shu2: 3,
  },
  mutations: {
    //这里放操作数据的方法（同步）
    ADD(state) {
      //能拿到state
      state.shu++
    },
    DEL(state) {
      //能拿到state
      state.shu--
    }
  },
  actions: {
    //这里放很多方法（可以异步）
    yibuadd({ commit }) {
      commit('ADD')
    },
    yibudel({ commit }) {
      commit('DEL')
    },
  },
  getters: {
    //计算函数
    xxx(state) {
      return state.shu + state.shu2
    }
  },



  //简单方法  直接展开
import { mapState, mapGetters, mapActions, mapMutations } from "vuex"; 
computed: 
    ...mapState(["shu"]), //简单方法
    ...mapGetters(["xxx"]),
 methods: 
    ...mapActions(["yibuadd", "yibudel"]), //简单方法
    ...mapMutations(["ADD", "DEL"]),
</pre
    >
    <img src="https://vuex.vuejs.org/vuex.png" alt="" />
    <hr />

    <Vuexx></Vuexx>

    <hr />
    <p>vue.config.js配置反向代理以及打包配置等</p>
    <a href="https://www.cnblogs.com/theblogs/p/10890362.html">点击查看</a>
  </div>
</template>
<script>
import Props from "./components/props";
import Emit from "./components/emit";
import Todo from "./components/todo";
import Footer from "./components/footer.vue";
import Vuexx from "./components/vuex.vue";

export default {
  components: {
    Props,
    Emit,
    Todo,
    Footer,
    Vuexx,
  },
  data() {
    return {
      istodo: true,
      pppp: {
        name: "张三",
        age: 18,
      },
    };
  },

  methods: {
    ck(name, age) {
      alert(`你好${name}，今年你${age}啦！`);
    },
    btnClick(value) {
      alert("收到了子组件的消息" + value);
    },
  },
};
</script>

<style lang="less">
.view {
  width: 100%;
  height: 200px;
  text-align: center;
}
.router-link-exact-active {
  color: red;
}
pre {
  background-color: rgb(40, 44, 52);
  padding: 20px;
  color: rgb(171, 178, 191);
  font-size: 20px;
}
</style>
