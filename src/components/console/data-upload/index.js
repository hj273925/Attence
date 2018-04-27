/**
 * Created by hj on 2018/3/30.
 */
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
          title: '工号',
          key: 'code'
        },
        {
          title: '员工类型',
          key: 'type'
        },
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '性别',
          key: 'gender'
        },
        {
          title: '出生年份',
          key: 'birthYear'
        },
        {
          title: '学历',
          key: 'degree'
        }
      ],
      rows: [],
      data: [],
      surveyId: {},
      file: null,
      loadingStatus: false
    }
  },
  computed: {
    uploadUrl() {
      return `${process.env.BASE_URL}/staff/upload`
    }
  },
  created() {
    this.loadResearchList()
    this.surveyId = this.$route.query
  },
  methods: {
    // 上传数据
    handleUpload(file) {
      this.file = file
    },
    handleSuccess(file, url) {
      console.log(file, url)
      this.$Message.success('上传文件成功！')
    },
    // 加载数据
    loadResearchList() {
      this.tableLoading = true
      const { tSearchWord, tLimit, current } = this
      const {surveyId} = this.$route.query
      ResearchIntercalate.getResearch(surveyId, tSearchWord, tLimit, current)
        .then((res) => {
          this.rows = res.items
          this.total = res.totalNumber
        })
        .catch(() => {
          this.$Message.error('获取用户列表失败！')
        })
        .finally(() => {
          this.tableLoading = false
        })
    },
    // 分页
    changePage(index) {
      this.current = index
      this.loadResearchList()
    }
  }
}

