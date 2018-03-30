import axios from 'axios'
const baseUrl = process.env.BASE_URL
class Processor {
  constructor(endPointURL, config = {}) {
    const axiosConfig = Object.assign({
      baseURL: endPointURL
    }, config)
    this.rest = axios.create(axiosConfig)
  }
  get(url, params, config) {
    const getConfig = {}
    if (params) Object.assign(getConfig, { params })
    if (config) Object.assign(getConfig, config)
    return this.rest.get(url, getConfig)
  }

  delete(url, config) {
    return this.rest.delete(url, config)
  }

  post(url, data, config) {
    return this.rest.post(url, data, config)
  }

  put(url, data, config) {
    return this.rest.put(url, data, config)
  }

  patch(url, data, config) {
    return this.rest.patch(url, data, config)
  }
}

class APIService extends Processor {
  constructor() {
    super(baseUrl)
    this.axios = axios
    this.initRest()
  }
  initRest() {
    this.rest.interceptors.response.use(
      res => {
        if (res.status === 200) {
          return res.data
        }
        return res
      }
    )
  }
  request(config) {
    return axios.request(config)
  }

  create(url, config) {
    return new Processor(url, config)
  }
}

export default new APIService()
