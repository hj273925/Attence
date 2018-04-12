import api from './api.service'
import qs from 'qs'

class OrganizationService {
  constructor() {
    this.api = api
  }

  getOrganizations(keyword, pageSize, curPage) {
    return this.api.post('/org/query', qs.stringify({keyword, pageSize, curPage}))
  }
  addOrganization(params) {
    return this.api.post('/org/create', params)
  }

  editOrganization(params) {
    return this.api.post('/org/update', params)
  }

  deleteOrganization(params) {
    return this.api.post('/org/deleteAll', params)
  }
}

export default new OrganizationService()
