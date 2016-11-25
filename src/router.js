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

export const router = new VueRouter({
  routes
})