// import { reqData, reqFormData, reqJson } from './request.class'
import { reqJson, reqData } from './request.class'

export async function userLogin (data) {
  const res = await reqJson({
    url: '/user-center/login',
    method: 'POST',
    data
  })
  return res
}

export async function userRegister (data) {
  const res = await reqData({
    url: '/user-center/register',
    method: 'POST',
    data,
    timeout: 120000
  })
  return res
}

export async function delay (data) {
  const res = await reqData({
    url: '/com-api/delay',
    method: 'POST',
    data,
    timeout: 60000
  })
  return res
}
