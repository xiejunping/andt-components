import peach from './peach'
import mark from './mark'

const directives = {
  peach,
  mark
}

export default {
  install (app) {
    Object.keys(directives).forEach((key) => {
      app.directive(key, directives[key])
    })
  }
}
