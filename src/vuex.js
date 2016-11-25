import Vue from 'vue'
import Vuex from 'vuex'
import App from './main'

import {
  getLocalUser,
  saveLocalUser,
  clearLocalUser
} from './utils'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    drawerState: false,
    loading: false,
    sgUser: getLocalUser()
  },
  getters: {},
  mutations: {
    tiggerDrawerState(state) {
      console.log(state)
      state.drawerState = !state.drawerState
    },
    setLoading(state) {
      state.loading = true
    },
    setLoaded(state) {
      state.loading = false
    },
    clearUser(state) {
      clearLocalUser()
      state.sgUser = {}
    },
    saveUser(state, user) {
      console.log(user);
      saveLocalUser(user)
      state.sgUser = user
    }
  },
  actions: {
    logout({
      commit
    }) {
      $.get('http://hidiana.cn/sys/logout', data => {
        if (data.status == '退出成功') {
          commit('clearUser')
          App.$router.push('login')
        }
      })
    }
  }
})
