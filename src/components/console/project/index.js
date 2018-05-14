export default {
  data() {
    return {
      StatisticsColumns: [
        {
          title: '项目名',
          key: 'name'
        },
        {
          title: '职位类别',
          key: 'date'
        },
        {
          title: '签到次数',
          key: 'age'
        },
        {
          title: '签到人数',
          key: 'address'
        }
      ],
      detailColumns: [
        {
          title: '项目名',
          key: 'pname'
        },
        {
          title: '考勤记录ID',
          key: 'id'
        },
        {
          title: '签到时间',
          key: 'time'
        },
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '公司名',
          key: 'cname'
        },
        {
          title: '职位类别',
          key: 'job'
        },
        {
          title: '签到地点',
          key: 'adress'
        },
      ],
      StatisticsData: [
        {
          name: '项目A',
          age: 18,
          address: '3',
          date: '高级JAVA'
        },
        {
          name: '项目B',
          age: 24,
          address: '8',
          date: '初级Python'
        },
        {
          name: '项目C',
          age: 30,
          address: '2',
          date: '项目经理'
        },
        {
          name: '项目D',
          age: 26,
          address: '5',
          date: '数据分析'
        }
      ],
      detailData: [
        {
          name: '张三',
          pname: '项目A',
          ccame: '上汽大通',
          id: 18,
          time: '2018-5-12',
          job: '高级JAVA',
          adress: ''
        },
        {
          name: '李四',
          pname: '项目B',
          ccame: '上汽大通',
          id: 24,
          time: '2018-5-14',
          job: '初级Python',
          adress: ''
        },
      ],
      researchNameList: [],
      groupNameList: [],
      titleList: [],
      formInline: {
        surveyId: '',
        orgId: '',
        idx: '',
        time: ''
      }
    }
  }
}

