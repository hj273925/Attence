import api from './api.service'

class OrganizationService {
  constructor() {
    this.api = api
  }

  getOrganizations() {
    return this.api.get('/org/query')
  }

  providerList(params) {
    return this.api.get('/provider/query', params)
  }

  accountList(params) {
    return this.api.get('/account/query', params)
  }

  productList(params) {
    return this.api.get('/instance/allProduct', params)
  }
}

export default new OrganizationService()
