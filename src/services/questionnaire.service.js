/**
 * Created by hj on 2018/4/2.
 */
import api from './api.service'
import qs from 'qs'

class ManageQuestionnaire {
  constructor() {
    this.api = api
  }
  getQuestionnaire(keyword, pageSize, curPage) {
    return this.api.post('/surveydoc/query', qs.stringify({keyword, pageSize, curPage}))
  }

  addQuestionnaire(params) {
    return this.api.post('/surveydoc/create', params)
  }

  editQuestionnaire(params) {
    return this.api.post('/surveydoc/update', params)
  }

  deleteQuestionnaire(params) {
    return this.api.post('/surveydoc/delete', params)
  }

  preview(id) {
    return this.api.post('/surveydoc/preview', qs.stringify(id))
  }
}

export default new ManageQuestionnaire()
