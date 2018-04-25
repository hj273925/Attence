/**
 * Created by hj on 2018/4/2.
 */
import api from './api.service'
import qs from 'qs'

class DictionaryService {
  constructor() {
    this.api = api
  }
  // 查询数据字典
  getDict(keyword, pageSize, curPage) {
    return this.api.post('/dict/query', qs.stringify({keyword, pageSize, curPage}))
  }
  // 新增数据字典
  addDict(params) {
    return this.api.post('/dict/create', params)
  }
  // 编辑数据字典
  editDict(params) {
    return this.api.post('/dict/update', params)
  }
  // 删除数据字典
  deleteDict(params) {
    return this.api.post('/dict/delete', params)
  }
}

export default new DictionaryService()
