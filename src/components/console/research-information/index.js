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
        status: '',
        orgIds: ''
      },
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
        })
        .catch(() => {
          this.$Message.error('获取调研信息失败！')
        })
    },
    // 加载组织信息
    loadOrgList() {
      OrganizationService.getOrganizations()
    }
  }
}

