/**
 * http utils, provide general check for http response
 */
// axios.defaults.headers.post['Content-Type'] = 'application/json'
import axios from 'axios'

axios.interceptors.request.use((req) => {
  if (req.method === 'post') {
    req.headers['Content-Type'] = 'application/json'

    if (!req.data) {
      req.data = {}
    }
  }
  return req
}, (error) => Promise.reject(error))

axios.defaults.withCredentials = true

const checkHttp = (res) => {
  if (!res) {
    let errObj = {
      message: '响应数据为空',
      response: null
    }

    throw errObj
  }

  if (res.status === 200) {
    return res.data
  }

  let errObj = {
    message: '请求错误',
    response: res
  }

  throw errObj
}

const checkResult = (res) => {
  let data = checkHttp(res)
  if (data.success) {
    return data.data
  }

  let errObj = {
    message: data.msg || data.message || '请求错误',
    response: data.errorData,
    code: data.errorCode
  }

  throw errObj
}

export const get = (url, params, headers) => {
  return axios.get(url, { params, headers }).then(checkResult)
}

export const post = (url, data, headers) => {
  return axios.post(url, data, headers).then(checkResult)
}

export const put = (url, data) => {
  return axios.put(url, data).then(checkResult)
}

export const del = (url) => {
  return axios.delete(url)
}

export default { get, post, put, del }
