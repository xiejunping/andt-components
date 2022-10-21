// import axios from 'axios'
import ReqClient from './interceptor'
import { message } from 'ant-design-vue'
import { RES_CODE } from './config'
import { Spin } from 'iview'

window.__axiosCannel = []

async function fmtResponse (response) {
  const { status, data } = response
  // HTTP状态码不正确
  if (status === 200) {
    if (data && data.code === RES_CODE) {
      return data.data
    } else if (data && data.msg) {
      message.error(data.msg, 5)
      throw response
    } else {
      message.error('接口返回的格式错误', 5)
      throw response
    }
  } else {
    switch (status) {
      case 403:
        message.error('服务器拒绝请求！', 5)
        break
      case 404:
        message.error('服务器找不到请求！', 5)
        break
      case 408:
        message.error('网络已超时，请重试！', 5)
        break
      case 500:
        message.error('服务器出错了！', 5)
        break
      case 503:
        message.error('服务器宕机了-_-。sorry！', 5)
        break
      case 504:
        message.error('服务器没有反应了！', 5)
        break
      default:
        message.error('网络错误! 请重试', 5)
        break
    }
    throw response
  }
}

export async function reqJson (config) {
  try {
    const CancelToken = axios.CancelToken
    const source = CancelToken.source()
    window.__axiosCannel.push({ source })
    config = Object.assign(config, {
      headers: {
        put: { 'Content-Type': 'application/json' },
        post: { 'Content-Type': 'application/json' },
        patch: { 'Content-Type': 'application/json' }
      },
      cancelToken: source.token,
      _: Date.now()
    })
    const response = await ReqClient.request(config)
    return await fmtResponse(response)
  } catch (e) {
    if (axios.isCancel(e)) {
      message.error(e.message)
      Spin.hide()
    }
    return false
  }
}

export async function reqData (config) {
  try {
    const CancelToken = axios.CancelToken
    const source = CancelToken.source()
    window.__axiosCannel.push({ source })
    config = Object.assign(config, {
      cancelToken: source.token,
      _: Date.now()
    })
    const response = await ReqClient.request(config)
    console.log(response)
    return await fmtResponse(response)
  } catch (e) {
    if (axios.isCancel(e)) {
      message.error(e.message)
      Spin.hide()
    }
    return false
  }
}

export async function reqFormData (config) {
  try {
    const CancelToken = axios.CancelToken
    const source = CancelToken.source()
    window.__axiosCannel.push({ source })
    config = Object.assign(config, {
      headers: {
        put: { 'Content-Type': 'multipart/form-data' },
        post: { 'Content-Type': 'multipart/form-data' },
        patch: { 'Content-Type': 'multipart/form-data' }
      },
      cancelToken: source.token,
      _: Date.now()
    })
    const response = await ReqClient.request(config)
    return await fmtResponse(response)
  } catch (e) {
    if (axios.isCancel(e)) {
      message.error(e.message)
      Spin.hide()
    }
    return false
  }
}

export function cancelRequest () {
  if (window.__axiosCannel.length) {
    window.__axiosCannel.forEach((ret, idx) => {
      const msg = process.env.NODE_ENV === 'production' ? '' : '请求已被取消'
      ret.source.cancel(msg)
      delete window.__axiosCannel[idx]
    })
  }
}
