/**
 * Created by hj on 2018/4/2.
 */
import api from './api.service'
import qs from 'qs'

class ResearchManageService {
  constructor() {
    this.api = api
  }
  // 查询调研事件
  getResearch(keyword, pageSize, curPage) {
    return this.api.post('/survey/query', qs.stringify({keyword, pageSize, curPage}))
  }
  // 根据id查询调研事件
  getResearchById(params) {
    return this.api.post('/survey/findById', qs.stringify(params))
  }
  // 根据组织id查询调研事件
  getSurveyByOrgId(keyword, pageSize, curPage) {
    return this.api.post('/survey/findByOrgId', qs.stringify({keyword, pageSize, curPage}))
  }
  // 创建调研事件
  addResearch(params) {
    return this.api.post('/survey/create', params)
  }
  // 编辑调研事件
  editResearch(params) {
    return this.api.post('/survey/update', params)
  }
  // 删除调研事件
  deleteResearch(params) {
    return this.api.post('/survey/delete', params)
  }
}

export default new ResearchManageService()
