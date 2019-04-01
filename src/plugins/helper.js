import moment from 'moment'
export default {
  install (Vue, options) {
    Vue.prototype.$helper = {
      fixed: function ({ roundRate = 2, value }) {
        if (roundRate) {
          const val = parseFloat(String(value).replace(/\s/g, '')).toFixed(roundRate)
          return String(val).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
        } else {
          return String(value).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
        }
      },
      dateFormat: function ({ date, format }) {
        return moment(date).format(format)
      }
    }
  }
}
