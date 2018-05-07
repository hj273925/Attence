/**
 * Created by hj on 2018/3/30.
 */
import OrganizationService from '@/services/organization.service'
import ResearchIntercalate from '@/services/researchIntercalate.service'

export default {
  data() {
    return {
      columns: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '单位',
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
      rule: {
        name: [
          { required: true, message: '请输入调研名', trigger: 'blur' }
        ],
        surveyDocId: [
          { required: true, message: '请选择问卷', trigger: 'blur' }
        ]
      },
      tableLoading: false,
      QuestionNaireList: [],
      rows: [],
      table: [],
      paramsList: [],
      record: {
        name: '',
        id: '',
        date: [],
        startDate: '',
        endDate: '',
        resendInterval: 0,
        autoResend: false,
        status: true,
        orgIds: [],
        surveyDocId: ''
      }
    }
  },
  computed: {
    surveyId() {
      return this.$route.query.id
    }
  },
  created() {
    this.loadOrglist()
    this.loadQuestionnaireList()
  },
  methods: {
    // 获取调研信息
    loadResearchInfo() {
      const {id} = this.$route.query
      ResearchIntercalate.getResearchById({id: id})
        .then((res) => {
          this.record = res
          this.record.date = [res.startDate, res.endDate]
          this.record.status = res.status === 'ON'
        })
        .catch(() => {
          this.$Message.error('获取调研信息失败！')
        })
    },
    // 加载单位列表
    loadOrglist() {
      this.tableLoading = true
      OrganizationService.getOrganizations()
        .then((res) => {
          this.rows = res.items
          if (this.$route.query.id) {
            this.loadResearchInfo()
          }
        })
        .catch(() => {
          this.$Message.error('获取单位列表失败！')
        })
        .finally(() => {
          this.tableLoading = false
        })
    },
    // 加载问卷列表
    loadQuestionnaireList() {
      ResearchIntercalate.getQuestionNaire()
        .then((res) => {
          this.QuestionNaireList = res
        })
        .catch(() => {
          this.$Message.error('获取问卷列表失败！')
        })
    },
    // 选择参数
    selectChange(data) {
      this.paramsList = data
    },
    // 创建调研
    createResearch() {
      this.$refs['formResearch'].validate((valid) => {
        if (valid) {
          if (this.paramsList.length < 1) {
            this.$Message.warning('请选择参选单位！')
            return
          }
          this.paramsList.forEach(value => {
            this.record.orgIds.push(value.id)
          })
          this.record.startDate = this.formatDate('yyyy-MM-dd hh:mm:ss', this.record.date[0])
          this.record.endDate = this.formatDate('yyyy-MM-dd hh:mm:ss', this.record.date[1])
          ResearchIntercalate.createReasearch(this.record)
            .then((res) => {
              this.$Message.success('创建调研成功！')
              sessionStorage.setItem('surveyId', res.id)
              this.$emit('next')
            })
            .catch(() => {
              this.$Message.error('创建调研失败！')
            })
        }
      })
    },
    // 点击下一步
    next() {
      this.$emit('next')
    }
  }
}

