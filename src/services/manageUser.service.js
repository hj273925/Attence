/**
 * Created by hj on 2018/4/2.
 */
import api from './api.service'
import qs from 'qs'

class ManageUserService {
  constructor() {
    this.api = api
  }

  queryUsers(kw, pageSize, curPage) {
    return this.api.post('/user/query', {
      'keyword' : kw,
      'pageSize': pageSize,
      'curPage': curPage
    })
  }

  getUsers() {
    return this.api.get('/user/query')
  }

  getUsersByName(params) {
    return this.api.post('/user/queryByName', params)
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
