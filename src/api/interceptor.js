import axios from 'axios'
import Qs from 'qs'
import FormData from 'form-data'
import store from '@/store'
import { Spin } from 'iview'
import { HOST_API } from './config'

function formDate (obj) {
  let form = new FormData()
  for (const key in obj) {
    if ({}.hasOwnProperty.call(obj, key)) {
      // 数组处理
      if (Object.prototype.toString.call(obj[key]) === '[object Array]') {
        obj[key].forEach(ret => {
          form.append(key, ret)
        })
      } else form.append(key, obj[key])
    }
  }
  return form
}

const instance = axios.create({
  baseURL: HOST_API,
  transformRequest: [function (data, headers) {
    const ContentType = headers.post['Content-Type'] || headers.put['Content-Type'] || headers.patch['Content-Type']
    if (ContentType.includes('json')) data = JSON.stringify(data)
    else if (ContentType.includes('form-data')) data = formDate(data)
    else data = Qs.stringify(data)
    return data
  }],
  paramsSerializer: function (params) {
    return Qs.stringify(params)
  },
  timeout: 10000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  },
  // onUploadProgress: function (e) {
  //   Spin.show()
  // },
  // onDownloadProgress: function (progressEvent) {
  //   Spin.hide()
  // },
  maxContentLength: 200000
})

if (store.state.token) {
  instance.defaults.headers.common['Authorization'] = store.state.token
}

export default instance
