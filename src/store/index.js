import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
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
  modules: {
  }
})
