/**
 * Created by hj on 2018/3/30.
 */
// import OrganizationService from '@/services/organization.service'
import researchManage from '@/services/researchManage.service'
import OrganizationService from '@/services/organization.service'

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
      const {id} = {id: '5acde94384f19c2d5cae9b02'}
      OrganizationService.getOrganizationsById({id: id})
        .then((res) => {
          console.log(res)
          this.rows = [res]
        })
        .catch(() => {
          this.$Message.error('获取组织信息失败！')
        })
    },
    // 下一步 跳转到人员数据上传
    next() {
      const {id} = this.$route.query
      this.$router.push({name: 'DataUpload', query: { id: id }})
    }
  }
}

