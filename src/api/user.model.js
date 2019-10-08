
import { reqJson, reqData, cancelRequest } from './request.class' // reqData, reqFormData, cancel

export function cancel () {
  cancelRequest()
}

export async function userLogin (data) {
  const res = await reqJson({
    url: '/user/login',
    method: 'POST',
    data
  })
  return res
}

export async function userRegister (data) {
  const res = await reqData({
    url: '/user/register',
    method: 'POST',
    data
  })
  return res
}

export async function delay (data) {
  const res = await reqData({
    url: '/common/delay',
    method: 'POST',
    data
  })
  return res
}
