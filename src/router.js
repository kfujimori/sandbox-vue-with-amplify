import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import About from './views/About'
import APITest from './views/APITest'
import Sample from './views/Sample'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/apitest',
      name: 'apitest',
      component: APITest
    },
    {
      path: '/sample',
      name: 'sample',
      component: Sample
    }
  ]
})