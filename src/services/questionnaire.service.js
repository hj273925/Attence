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

  getQuestionnaireInfo(params) {
    return this.api.post('/surveydoc/findById', qs.stringify(params))
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
}

export default new ManageQuestionnaire()
