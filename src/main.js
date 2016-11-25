import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './vuex'

import Nav from './components/Nav'


import routes from './router'

require('./assets/main.scss')

const router = new VueRouter({
  routes
})

Vue.use(VueRouter)

router.afterEach((to, from, next) => {
  if (store.state.drawerState) {
    store.commit('tiggerDrawerState')
  }
})

const app = new Vue({
  router,
  store,
  components: {
    vNav: Nav
  },
  template: `
    <v-nav>
    </v-nav>
  `
}).$mount('#app')
