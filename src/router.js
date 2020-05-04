import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import About from './views/About'
import APITest from './views/APITest'
import Sample from './views/Sample'
import StudyDirective from './views/StudyDirective'
import StudyComponents from './views/StudyComponents'
import StudyDynamicComponents from './views/StudyDynamicComponents'
import StudyAnimation from './views/StudyAnimation'

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
    },
    {
      path: '/studydirective',
      name: 'studydirective',
      component: StudyDirective
    },
    {
      path: '/studycomponents',
      name: 'studycomponents',
      component: StudyComponents
    },
    {
      path: '/studydynamiccomponents',
      name: 'studydynamiccomponents',
      component: StudyDynamicComponents
    },
    {
      path: '/studyanimation',
      name: 'studyanimation',
      component: StudyAnimation
    },
]
})
