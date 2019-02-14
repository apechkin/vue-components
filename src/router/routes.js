
import Vue from 'vue'
const Home = Vue.component('asyncComponent',
  () => import('../pages/Home/index.vue'))

export default [
  {
    path: '/',
    component: Home
  }
]
