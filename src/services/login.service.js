/**
 * Created by hj on 2018/4/18.
 */
import api from './api.service'

class LoginService {
  constructor() {
    this.api = api
  }
  sendSmsPwd(params) {
    return this.api.post('/auth/sendSmsPwd', params)
  }

  Login(params) {
    return this.api.post('/auth/login', params)
  }

  Logout(params) {
    return this.api.post('/auth/logout', params)
  }
}

export default new LoginService()
