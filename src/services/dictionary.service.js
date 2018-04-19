/**
 * Created by hj on 2018/4/2.
 */
import api from './api.service'
import qs from 'qs'

class DictionaryService {
  constructor() {
    this.api = api
  }
  getDict(keyword, pageSize, curPage) {
    return this.api.post('/dict/query', qs.stringify({keyword, pageSize, curPage}))
  }

  addDict(params) {
    return this.api.post('/dict/create', params)
  }

  editDict(params) {
    return this.api.post('/dict/update', params)
  }

  deleteDict(params) {
    return this.api.post('/dict/delete', params)
  }
}

export default new DictionaryService()
