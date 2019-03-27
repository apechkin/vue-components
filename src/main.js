import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import bComponent from './components'

Vue.config.productionTip = false
Vue.use(bComponent)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
