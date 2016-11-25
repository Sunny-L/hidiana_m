
import Hello from './views/Hello'
import Index from './views/Index'
import Bbs from './views/Bbs'
import Login from './views/Login'
import Hotspot from './views/Hotspot'
import StatChart from './views/StatChart'
import {
  checkLocalUser
} from './utils'

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
}, {
  path: '/statchart',
  component: StatChart
}, ]

export default routes