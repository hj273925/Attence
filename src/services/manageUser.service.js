/**
 * Created by hj on 2018/4/2.
 */
import api from './api.service'

class ManageUserService {
  constructor() {
    this.api = api
  }

  getUsers() {
    // return this.api.get(process.env.BASE_URL+'/user/query')
    return this.api.get('/user/query')
  }

  addUser(params) {
    return this.api.post('/provider/query', params)
  }

  deteleUser(params) {
    return this.api.delete('/account/query', params)
  }
}

export default new ManageUserService()
