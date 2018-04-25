/**
 * Created by hj on 2018/4/2.
 */
import api from './api.service'
import qs from 'qs'

class ManageUserService {
  constructor() {
    this.api = api
  }
  // 查询用户信息
  getUsers(keyword, pageSize, curPage) {
    return this.api.post('/user/query', qs.stringify({keyword, pageSize, curPage}))
  }
  // 新增用户信息
  addUser(params) {
    return this.api.post('/user/create', params)
  }
  // 编辑用户信息
  editUser(params) {
    return this.api.post('/user/update', params)
  }
  // 删除用户信息
  deleteUser(params) {
    return this.api.post('/user/delete', params)
  }
}

export default new ManageUserService()
