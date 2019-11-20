import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import First from '../views/First'
import Analysis from '../views/Analysis'
import Alert from '../views/Alert'
import Data from '../views/Data'
import System from '../views/System'
// import Download from '../views/Download'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/views/About',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/views/First',
    name: 'First',
    component: First
    
  },
  {
    path: '/views/Analysis',
    name: 'Analysis',
    component: Analysis
    
  },
  {
    path: '/views/Alert',
    name: 'Alert',
    component: Alert
    
  },
  {
    path: '/views/System',
    name: 'system',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: System
  },
  {
    path: '/views/Data',
    name: 'data',
    component: Data
  },
  // {
  //   path: '/views/Download',
  //   name: 'Download',
  //   component: Download
  // },
]

const router = new VueRouter({
  routes
})

export default router
