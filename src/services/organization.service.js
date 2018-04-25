import api from './api.service'
import qs from 'qs'

class OrganizationService {
  constructor() {
    this.api = api
  }
  // 查询组织
  getOrganizations(keyword, pageSize, curPage) {
    return this.api.post('/org/query', qs.stringify({keyword, pageSize, curPage}))
  }
  // 根据id查询组织
  getOrganizationsById(params) {
    return this.api.post('/org/findById', qs.stringify(params))
  }
  // 新增组织
  addOrganization(params) {
    return this.api.post('/org/create', params)
  }
  // 编辑组织
  editOrganization(params) {
    return this.api.post('/org/update', params)
  }
  // 删除组织
  deleteOrganization(params) {
    return this.api.post('/org/delete', params)
  }
}

export default new OrganizationService()
