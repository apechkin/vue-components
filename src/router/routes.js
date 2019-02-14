
import Vue from 'vue'
const Home = Vue.component('asyncComponent',
  () => import('../components/Page/Home'))

export default [
  {
    path: '/',
    component: Home
  }
]
