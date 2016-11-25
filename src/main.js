import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './vuex'

import {
  checkLocalUser
} from './utils'
import App from './App'
import Nav from './components/Nav'
import Hello from './views/Hello'
import Index from './views/Index'
import Bbs from './views/Bbs'
import Login from './views/Login'
import Hotspot from './views/Hotspot'


require('./assets/main.scss')

Vue.use(VueRouter)

const routes = [{
  path: '/index',
  component: Index
}, {
  path: '/',
  component: Hello
}, {
  path: '/bbs',
  component: Bbs
}, {
  path: '/login',
  component: Login
}, {
  path: '/hotspot',
  beforeEnter: (to, from, next) => {
    if (checkLocalUser()) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
    }
  },
  component: Hotspot
}, ]

const router = new VueRouter({
  routes
})

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

export default app
