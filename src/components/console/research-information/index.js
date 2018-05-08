/**
 * Created by hj on 2018/3/30.
 */
import researchManage from '@/services/researchManage.service'

export default {
  data() {
    return {
      columns: [
        {
          title: '全称',
          key: 'fullName'
        },
        {
          title: '规模',
          key: 'scale'
        },
        {
          title: '抽样率',
          key: 'sampleRate'
        },
        {
          title: '冗余率',
          key: 'extraRate'
        }
      ],
      surveyColumns: {
        surveyDocId: '',
        startDate: '',
        endDate: '',
        autoResend: '',
        resendInterval: '',
        status: ''
      },
      rows: [],
      loading: true,
      tableLoading: false,
      record: {}
    }
  },
  created() {
    this.loadSurveyList()
  },
  methods: {
    // 加载调研信息
    loadSurveyList() {
      const {id} = this.$route.query
      researchManage.getResearchById({id: id})
        .then((res) => {
          this.surveyColumns = res
          this.loadOrgList()
        })
        .catch(() => {
          this.$Message.error('获取调研信息失败！')
        })
    },
    // 加载组织信息
    loadOrgList() {
      this.rows = [JSON.parse(sessionStorage.getItem('orgInfo'))]
    },
    // 上一步 跳转到调研列表
    last() {
      this.$router.push({name: 'SurveyList'})
    },
    // 下一步 跳转到人员数据上传
    next() {
      const {id} = this.$route.query
      this.$router.push({name: 'DataUpload', query: { surveyId: id }})
    }
  }
}

