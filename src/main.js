import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './vuex'

import App from './App'
import Nav from './components/Nav'
import Hello from './views/Hello'
import Index from './views/Index'
import Bbs from './views/Bbs'

require('./assets/main.scss')

Vue.use(VueRouter)

const routes = [{
  path: '/index',
  component: Index
}, {
  path: '/',
  component: Hello
},{
  path: '/bbs',
  component: Bbs
}, ]

const router = new VueRouter({
  routes
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
