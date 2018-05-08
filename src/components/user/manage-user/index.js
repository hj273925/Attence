/**
 * Created by hj on 2018/3/30.
 */
const data = {
  Manage0rganization: '组织管理',
  ManageUser: '用户管理',
  DataDictionary: '数据字典',
  ManageQuestionnaire: '问卷信息',
  QuestionnaireDesign: '问卷信息',
  SurveyManagement: '调研信息',
  SurveyIntercalate: '调研信息',
  SampleComposition: '样本成分分析',
  SatisfactionComparison: '满意度对比',
  SatisfactionDistribution: '满意度分布',
  IndexComparison: '7维21指标对比',
  IndexDistribution: '7维21指标分布',
  ProblemDistribution: '问题选项分布'
}
import AnalysisService from '@/services/analysis.service.js'
export default {
  data() {
    return {
      activeMenu: '组织管理',
      menu: [
        {
          title: '基础信息',
          subMenu: [
            {name: '组织管理', path: 'Manage0rganization'},
            {name: '用户管理', path: 'ManageUser'},
            {name: '数据字典', path: 'DataDictionary'}
          ]
        }, {
          title: '问卷管理',
          subMenu: [
            {name: '问卷信息', path: 'ManageQuestionnaire'}
          ]
        }, {
          title: '调研管理',
          subMenu: [
            {name: '调研信息', path: 'SurveyManagement'}
          ]
        }, {
          title: '数据分析',
          subMenu: [
            {name: '样本成分分析', path: 'SampleComposition'},
            {name: '满意度对比', path: 'SatisfactionComparison'},
            {name: '满意度分布', path: 'SatisfactionDistribution'},
            {name: '7维21指标对比', path: 'IndexComparison'},
            {name: '7维21指标分布', path: 'IndexDistribution'},
            {name: '问题选项分布', path: 'ProblemDistribution'}
          ]
        }
      ]
    }
  },
  created() {
    this.activeMenu = data[this.$route.name]
    this.loadSurveyList()
  },
  methods: {
    loadSurveyList() {
      AnalysisService.getSurveyList()
        .then((res) => {
          console.log(res)
          this.$store.commit('setResearchNameList', res)
        })
        .catch(() => {
          this.$Message.error('获取数据失败！')
        })
    }
  }
}

