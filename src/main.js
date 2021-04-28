import Vue from 'vue'
import moment from 'moment'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Layout, Row, Col, Button, Icon, AutoComplete, Select, Popover, notification, message, Modal, Input, Checkbox, Radio, Tag, Switch, Popconfirm, DatePicker, Pagination, LocaleProvider,
  Form, Steps, Anchor, InputNumber
} from 'ant-design-vue'
import { Spin } from 'iview'
import '@/assets/styles/index.less'
import './plugins/utils'
import './plugins/table'

moment.locale('zh-cn')

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
  .use(Switch)
  .use(Popconfirm)
  .use(DatePicker)
  .use(Pagination)
  .use(LocaleProvider)
  .use(Form)
  .use(Steps)
  .use(Anchor)
  .use(InputNumber)

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
