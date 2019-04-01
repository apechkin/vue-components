import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import bComponent from './components'
import helper from './plugins/helper'

Vue.config.productionTip = false
Vue.use(bComponent)
Vue.use(helper)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
