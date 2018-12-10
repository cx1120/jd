import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Shopping from './views/Shopping.vue'
import User from './views/User.vue'
import Fenlei from './views/Fenlei.vue'
import Sousuo from './views/Sousuo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/shopping',
      name: 'shopping',
      component: Shopping
    },{
      path: '/user',
      name: 'user',
      component: User
    },{
      path: '/xiaoxi',
      name: 'xiaoxi',
      component: Sousuo
    },{
      path: '/fenlei',
      name: 'fenlei',
      component: Fenlei
    }]
})
