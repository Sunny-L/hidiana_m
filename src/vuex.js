import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

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
    sgUser: getLocalUser(),
    websocketInfo: ''
  },
  getters: {},
  mutations: {
    tiggerDrawerState(state) {
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
      saveLocalUser(user)
      state.sgUser = user
    },
    setWebsocket(state, info) {
      state.websocketInfo = info
    }
  },
  actions: {
    logout({
      commit
    }) {
      $.get('http://hidiana.cn/sys/logout', data => {
        if (data.status == '退出成功') {
          commit('clearUser')
          router.push('login')
        }
      })
    }
  }
})