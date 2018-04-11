/**
 * Created by hj on 2018/4/2.
 */
import api from './api.service'
import qs from 'qs'

class ManageUserService {
  constructor() {
    this.api = api
  }

  getUsers(keyword, pageSize, curPage) {
    return this.api.get('/user/query', qs.parse({keyword, pageSize, curPage}))
  }

  addUser(params) {
    return this.api.post('/user/create', params)
  }

  editUser(params) {
    return this.api.post('/user/update', params)
  }

  deleteUser(params) {
    return this.api.post('/user/delete', params)
  }
}

export default new ManageUserService()
