import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    count: 0,
    count2: 0,
  },
  mutations: {
    minus(state) {
      state.count--;
      state.count2--;
    },
    plus(state) {
      state.count++;
      state.count2++;
    }
  },
  actions: {
  },
  modules: {
  }
})
