import echarts from 'echarts'
export default {
  data() {
    return {
      data: [],
      projectOption:{
        color: ['#2d8cf0'],
        title: {
          text: '项目-人数/签到数（TOP10）'
        },
        tooltip: {},
        legend: {
          data:['销量']
        },
        xAxis: {
          data: ["项目A","项目B","项目C","项目D","项目E","项目F"]
        },
        yAxis: {},
        series: [{
          name: '人数/签到数',
          type: 'bar',
          data: [35, 30, 26, 18, 13, 5]
        }]
      },
      companyOption: {
        color: ['#00ffff'],
        title: {
          text: '公司-人数/签到数（TOP10）'
        },
        tooltip: {},
        legend: {
          data:['销量']
        },
        xAxis: {
          data: ["项目A","项目B","项目C","项目D","项目E","项目F"]
        },
        yAxis: {},
        series: [{
          name: '人数/签到数',
          type: 'bar',
          data: [35, 30, 26, 18, 13, 5]
        }]
      },
      staffOption: {
        color: ['#66cccc'],
        title: {
          text: '职位类型-人数/签到数（TOP10）'
        },
        tooltip: {},
        legend: {
          data:['销量']
        },
        xAxis: {
          data: ["项目A","项目B","项目C","项目D","项目E","项目F"]
        },
        yAxis: {},
        series: [{
          name: '人数/签到数',
          type: 'bar',
          data: [35, 30, 26, 18, 13, 5]
        }]
      }
    }
  },
  methods: {
  }
}

