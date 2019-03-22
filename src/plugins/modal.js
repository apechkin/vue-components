const ModalPlugin = {
  install (Vue, opt) {
    let currentWindow = [null]
    let promiseWrapper = new Promise((resolve, reject) => {
      Vue.prototype.$modalResolve = resolve
      Vue.prototype.$modalReject = reject
    })
    Promise.prototype.__create = (component, props) => {
      currentWindow.push({ component, props })
      currentWindow.shift()
      return promiseWrapper
    }
    const promiseFunction = () => {
      return promiseWrapper
    }
    Vue.util.defineReactive(Vue, '_modal', currentWindow)
    Object.defineProperty(Vue.prototype, '$modal', {
      get () {
        return Vue._modal[0]
      },
      set (data) {
        currentWindow.push(data)
        currentWindow.shift()
      }
    })
    Object.defineProperty(Vue.prototype, '$dialog', {
      get () {
        return promiseFunction()
      },
      set (data) {
        console.warn('Установка диалога через setter больше не поддерживается. Используется $dialog.create возвращает Promise')
        currentWindow.push(data)
        currentWindow.shift()
      }
    })
  }
}

export default ModalPlugin
