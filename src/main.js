import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Layout, Row, Col, Button, AutoComplete, Select, Popover, notification, message, Modal } from 'ant-design-vue'
import { Spin } from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(Layout)
Vue.use(Row)
Vue.use(Col)
Vue.use(Button)
Vue.use(AutoComplete)
Vue.use(Select)
Vue.use(Popover)
Vue.use(Modal)
Vue.use(Spin)

Vue.prototype.$message = message
Vue.prototype.$notification = notification
Vue.prototype.$spin = Spin
Vue.prototype.$info = Modal.info
Vue.prototype.$success = Modal.success
Vue.prototype.$error = Modal.error
Vue.prototype.$warning = Modal.warning
Vue.prototype.$confirm = Modal.confirm

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
