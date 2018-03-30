import api from './api.service'

class ChargeService {
  constructor() {
    this.api = api
  }

  instanceList(params) {
    return this.api.get('/instance/query', params)
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

export default new ChargeService()
