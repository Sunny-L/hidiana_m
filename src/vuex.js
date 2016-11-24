import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    drawerState: false
  },
  getters:{

  },
  mutations: {
    tiggerDrawerState(state){
      state.drawerState = !state.drawerState
    }
  },
  actions: {

  }
}) 
