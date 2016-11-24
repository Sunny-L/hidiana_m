import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    drawerState: false,
    loading: false
  },
  getters:{

  },
  mutations: {
    tiggerDrawerState(state){
      state.drawerState = !state.drawerState
    },
    setLoading(state){
      state.loading = true 
    },
    setLoaded(state){
      state.loading = false 
    }
  },
  actions: {

  }
}) 
