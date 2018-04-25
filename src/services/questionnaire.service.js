/**
 * Created by hj on 2018/4/2.
 */
import api from './api.service'
import qs from 'qs'

class ManageQuestionnaire {
  constructor() {
    this.api = api
  }
  // 查询问卷信息
  getQuestionnaire(keyword, pageSize, curPage) {
    return this.api.post('/surveydoc/query', qs.stringify({keyword, pageSize, curPage}))
  }
  // 根据id查询问卷信息
  getQuestionnaireInfo(params) {
    return this.api.post('/surveydoc/findById', qs.stringify(params))
  }
  // 新增问卷信息
  addQuestionnaire(params) {
    return this.api.post('/surveydoc/create', params)
  }
  // 编辑问卷信息
  editQuestionnaire(params) {
    return this.api.post('/surveydoc/update', params)
  }
  // 删除问卷信息
  deleteQuestionnaire(params) {
    return this.api.post('/surveydoc/delete', params)
  }
}

export default new ManageQuestionnaire()
