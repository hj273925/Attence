/**
 * Created by hj on 2018/4/8.
 */
import api from './api.service'

class ResearchIntercalate {
  constructor() {
    this.api = api
  }

  getOrganizations() {
    return this.api.get('/org/query')
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

export default new ResearchIntercalate()
