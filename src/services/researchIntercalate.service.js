/**
 * Created by hj on 2018/4/8.
 */
import api from './api.service'
import qs from 'qs'

class ResearchIntercalate {
  constructor() {
    this.api = api
  }
  // 获取开放状态的问卷列表
  getQuestionNaire() {
    return this.api.post('/surveydoc/findByStatusON')
  }
  // 创建调研
  createReasearch(params) {
    return this.api.post('/survey/create', params)
  }
  // 人员数据上传
  getData(params) {
    return this.api.post('/survey/staffUploadStatus', qs.stringify(params))
  }
  getResearch(keyword, pageSize, curPage) {
    return this.api.post('/org/query', qs.stringify({keyword, pageSize, curPage}))
  }

  addResearch(params) {
    return this.api.post('/org/create', params)
  }

  editResearch(params) {
    return this.api.post('/org/update', params)
  }

  deleteResearch(params) {
    return this.api.post('/org/deleteAll', params)
  }
}

export default new ResearchIntercalate()
