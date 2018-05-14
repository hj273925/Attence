/**
 * Created by hj on 2018/5/09.
 */

export default {
  name: 'ManageUser',
  data() {
    return {
      menu: [{
        title: '仪表盘',
        subMenu: [
          {name: '总览', path: 'Overview'},
          {name: '项目', path: 'Project'},
          {name: '公司', path: 'Company'},
          {name: '人员', path: 'Staff'}
        ]
      }]
    }
  }
}


