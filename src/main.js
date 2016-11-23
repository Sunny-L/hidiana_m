import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Hello from './views/Hello'
import Index from './views/Index'
import Nav from './components/Nav'

require('./assets/main.scss')

Vue.use(VueRouter)

const routes = [{
  path: '/index',
  component: Index
}, {
  path: '/',
  component: Hello
}, ]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router,
  components: {
    vNav: Nav
  },
  template: `
  <div>
    <v-nav>
      <div slot="content">
        <router-view></router-view>
      </div>
    </v-nav>
  </div>
  `
}).$mount('#app')
