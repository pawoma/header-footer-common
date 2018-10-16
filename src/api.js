import { post, get } from './util/http'
const apiHost = 'http://dev.sks.org'
export default {
  apis: {
    logout: `${apiHost}/account/retail/user/logout`,
    checkSignatureStatus: `${apiHost}/retail/contract/signature/checkSignatureStatus`
  },
  post(api, params = {}) {
    return post(this.apis[api], params).catch(res => {
      if (res.code === 430000) {
        window.location.href = `${location.origin}/views/login.html`
        return
      }
      throw res
    })
  },
  get(api, params = {}) {
    return get(this.apis[api], params).catch(res => {
      if (res.code === 430000) {
        window.location.href = `${location.origin}/views/login.html`
        return
      }
      throw res
    })
  }
}