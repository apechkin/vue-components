import BaseContent from './RCBoxes/content.vue'
import BaseConfirm from './RCBoxes/confirm.vue'
import BaseBox from './RCBoxes/box.vue'
import DropExcel from './RDropExcel/index.vue'
import FileReader from './RFileReader/index.vue'
import RArea from './RArea/index.vue'
import RButton from './Buttons/RButton/index.vue'
import SvgButton from './Buttons/RSvgButton/index.vue'
import BlinkButton from './Buttons/RBlinkButton/index.vue'

export default {
  install (Vue) {
    Vue.component('BaseContent', BaseContent)
    Vue.component('BaseConfirm', BaseConfirm)
    Vue.component('BaseBox', BaseBox)
    Vue.component('DropExcel', DropExcel)
    Vue.component('FileReader', FileReader)
    Vue.component('RArea', RArea)
    Vue.component('RButton', RButton)
    Vue.component('SvgButton', SvgButton)
    Vue.component('BlinkButton', BlinkButton)
  }
}
