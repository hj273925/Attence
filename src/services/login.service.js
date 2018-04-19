/**
 * Created by hj on 2018/4/18.
 */
import api from './api.service'
import qs from 'qs'

class LoginService {
  constructor() {
    this.api = api
  }
  sendSmsPwd(params) {
    return this.api.post('/auth/sendSmsPwd', qs.stringify(params), {withCredentials: true})
  }

  Login(params) {
    return this.api.post('/auth/login', qs.stringify(params), {withCredentials: true})
  }

  Logout(params) {
    return this.api.post('/auth/logout', qs.stringify(params))
  }
}

export default new LoginService()
