export default {
  data() {
    return {
      columns: [
        {
          title: '职位类别',
          key: 'date'
        },
        {
          title: '项目名',
          key: 'name'
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
      data: [
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

