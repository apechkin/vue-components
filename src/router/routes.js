
import Vue from 'vue'
const Home = Vue.component('asyncComponent',
  () => import('../pages/Home/index.vue'))

const Testpage = Vue.component('asyncComponent',
  () => import('../pages/TestPage.vue'))

export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/test',
    component: Testpage
  }
]
