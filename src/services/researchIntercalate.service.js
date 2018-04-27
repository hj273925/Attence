/**
 * Created by hj on 2018/4/8.
 */
import api from './api.service'
import qs from 'qs'

class ResearchIntercalate {
  constructor() {
    this.api = api
  }
  // 根据id查询调研事件
  getResearchById(params) {
    return this.api.post('/survey/findById', qs.stringify(params))
  }
  // 获取开放状态的问卷列表
  getQuestionNaire() {
    return this.api.post('/surveydoc/findByStatusON')
  }
  // 创建调研
  createReasearch(params) {
    return this.api.post('/survey/create', params)
  }
  getResearch(surveyId, keyword, pageSize, curPage) {
    return this.api.post('/staff/query', qs.stringify({surveyId, keyword, pageSize, curPage}))
  }
  // 人员数据上传
  getDataList(params) {
    return this.api.post('/survey/staffUploadStatus', qs.stringify(params))
  }
  // 获取筛选列表
  getFilterList(params) {
    return this.api.post('/survey/staffUploadStatus', qs.stringify(params))
  }
  // 获取发放列表
  getFrantList(params) {
    return this.api.post('/survey/staffUploadStatus', qs.stringify(params))
  }
  //  获取进度列表
  getProgressList(params) {
    return this.api.post('/survey/staffUploadStatus', qs.stringify(params))
  }
}

export default new ResearchIntercalate()
