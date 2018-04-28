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
  // 人员数据上传后根据调研事件和组织id进行查询
  getResearch(surveyId, orgId, keyword, pageSize, curPage) {
    return this.api.post('/staff/query', qs.stringify({surveyId, orgId, keyword, pageSize, curPage}))
  }
  // 筛选员工数据
  doSelectStaff(surveyId, orgId, total) {
    return this.api.post('/staff/doSelectStaff', qs.stringify({surveyId, orgId, total}))
  }
  // 查询筛选后的员工
  queryBySelected(surveyId, orgId) {
    return this.api.post('/staff/queryBySelected', qs.stringify({surveyId, orgId}))
  }
  // 清除全部人员的选中标记
  clean(surveyId, orgId) {
    return this.api.post('/staff/cleanSelectedStaff', qs.stringify({surveyId, orgId}))
  }
  // 清除指定人员的选中标记
  cleanByIds(surveyId, orgId, staffIds) {
    return this.api.post('/staff/cleanByIds', qs.stringify({surveyId, orgId, staffIds}))
  }
  // 人员数据上传
  getData(params) {
    return this.api.post('/survey/staffUploadStatus', qs.stringify(params))
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
