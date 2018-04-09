/**
 * Created by hj on 2018/4/2.
 */
import api from './api.service'

class ManageUserService {
  constructor() {
    this.api = api
  }

  getUsers() {
    return this.api.get('/user/query')
  }

  addUser(params) {
    return this.api.post('/user/create', params)
  }

  editUser(params) {
    return this.api.post('/user/update', params)
  }

  deleteUser(params) {
    return this.api.post('/user/deleteAll', params)
  }
}

export default new ManageUserService()
