import BaseContent from './RCBoxes/content.vue'
import BaseConfirm from './RCBoxes/confirm.vue'
import BaseBox from './RCBoxes/box.vue'
export default {
  install (Vue) {
    Vue.component('BaseContent', BaseContent)
    Vue.component('BaseConfirm', BaseConfirm)
    Vue.component('BaseBox', BaseBox)
  }
}
