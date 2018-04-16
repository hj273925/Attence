/**
 * Created by hj on 2018/4/2.
 */
import api from './api.service'
import qs from 'qs'

class ResearchManageService {
  constructor() {
    this.api = api
  }
  getResearch(keyword, pageSize, curPage) {
    return this.api.post('/survey/query', qs.stringify({keyword, pageSize, curPage}))
  }

  addResearch(params) {
    return this.api.post('/survey/create', params)
  }

  editResearch(params) {
    return this.api.post('/survey/update', params)
  }

  deleteResearch(params) {
    return this.api.post('/survey/delete', params)
  }
}

export default new ResearchManageService()
