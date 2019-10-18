import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Layout, Row, Col, Button, Icon, AutoComplete, Select, Popover, notification, message, Modal, Input, Checkbox, Radio, Tag } from 'ant-design-vue'
import { Spin } from 'iview'
import '@/assets/styles/index.less'

Vue.use(Layout)
  .use(Row)
  .use(Col)
  .use(Button)
  .use(Icon)
  .use(AutoComplete)
  .use(Select)
  .use(Popover)
  .use(Modal)
  .use(Spin)
  .use(Input)
  .use(Checkbox)
  .use(Radio)
  .use(Tag)

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
