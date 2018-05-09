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
          {name: '总览', path: 'SurveyList'},
          {name: '项目', path: 'ResearchInformation'},
          {name: '公司', path: 'DataUpload'},
          {name: '人员', path: 'SampleSelection'}
        ]
      }]
    }
  }
}


