/**
 * Created by hj on 2018/3/30.
 */

export default {
  name: 'ManageUser',
  data() {
    return {
      menu: [{
        title: '调研管理',
        subMenu: [
          {name: '调研信息', path: 'ResearchInformation'},
          {name: '人员数据上传', path: 'DataUpload'},
          {name: '样本筛选', path: 'SampleSelection'},
          {name: '问卷发放', path: 'QuestionnaireDistribution'},
          {name: '填写进度', path: 'FillProgress'}
        ]
      }]
    }
  }
}


