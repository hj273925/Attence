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

  // 查询单位员工填写进度
  findStaffsByCompleteStatus(surveyId, isCompleted, pageSize, curPage) {
    return this.api.post('/staff/query', qs.stringify({surveyId, isCompleted, pageSize, curPage}))
  }

  // 查询员工根据通知状态
  findStaffsByNotifiedStatus(surveyId, isNotified, pageSize, curPage) {
    return this.api.post('/staff/query', qs.stringify({surveyId, isNotified, pageSize, curPage}))
  }
}

export default new ResearchIntercalate()
