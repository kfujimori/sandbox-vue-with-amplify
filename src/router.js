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
import StudyCreatingParts from './views/StudyCreatingParts'
import StudyFilters from './views/StudyFilters'
import StudyMixins from './views/StudyMixins'
import StudyRouter from './views/StudyRouter'
import Article from './components/Article'
import StudyStore from './views/StudyStore'

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
    {
      path: '/studycreatingparts',
      name: 'studycreatingparts',
      component: StudyCreatingParts
    },
    {
      path: '/studyfilters',
      name: 'studyfilters',
      component: StudyFilters
    },
    {
      path: '/studymixins',
      name: 'studymixins',
      component: StudyMixins
    },
    {
      path: '/studyrouter',
      name: 'studyrouter',
      component: StudyRouter
    },
    {
      path: '/article/:id',
      name: 'article',
      component: Article
    },
    {
      path     : '/article/useprops/:idp',
      name     : 'article',
      component: Article,
      // props    :true,
      props    : routes => ({
        idp: Number(routes.params.idp)
      })
    },
    {
      path       : '/studyrouter/multiview',
      name       : 'multiview',
      component  : StudyRouter,
      props : () => (
        console.log(1111)
      ),
      children   : [
        {
          path      : 'children',
          name      : 'children',
          component : StudyMixins,
        }
      ]
    },
    {
      path: '/studystore',
      name: 'studystore',
      component: StudyStore
    },
  ]
})
