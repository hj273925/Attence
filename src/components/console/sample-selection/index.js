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
      sampleColumns: {
        scale: '',
        sampleRate: '',
        extraRate: '',
        sampleNum: '',
        sample: '',
        extraNum: ''
      },
      rows: [],
      selected: []
    }
  },
  created() {
    this.loadOrgList()
    this.loadStaffList()
  },
  methods: {
    // 加载抽样信息
    loadOrgList() {
      this.sampleColumns = JSON.parse(sessionStorage.getItem('orgInfo'))
    },
    // 点击筛选按钮进行筛选并展示筛选后员工数据
    filtrate() {
      const {surveyId} = this.$route.query
      const {id} = JSON.parse(sessionStorage.getItem('orgInfo'))
      this.sampleColumns.sample = '23'
      console.log(surveyId, id, this.sampleColumns.sample)
      ResearchIntercalate.doSelectStaff(surveyId, id, this.sampleColumns.sample)
        .then((res) => {
          this.$Message.success('筛选成功！')
          this.loadStaffList()
        })
        .catch(() => {
          this.$Message.error('筛选失败！')
        })
    },
    // 点击清除按钮清除已选中人员的选中标记
    clean() {
      const {surveyId} = this.$route.query
      const {id} = JSON.parse(sessionStorage.getItem('orgInfo'))
      ResearchIntercalate.clean(surveyId, id)
        .then((res) => {
          this.$Message.success('选中标记已清除！')
          this.loadStaffList()
        })
        .catch(() => {
          this.$Message.error('已选中标记失败！')
        })
    },
    // 多选触发事件
    selectChange(selection) {
      this.selected = selection
    },
    // 清除指定人员的选中状态
    cleanByIds() {
      let selections = []
      this.selected.forEach((selected) => {
        selections.push(selected.id)
      })
      console.log(selections)
      const {surveyId} = this.$route.query
      const {id} = JSON.parse(sessionStorage.getItem('orgInfo'))
      ResearchIntercalate.cleanByIds(surveyId, id, selections)
        .then((res) => {
          this.$Message.success('选中标记已清除！')
          this.loadStaffList()
        })
        .catch(() => {
          this.$Message.error('已选中标记失败！')
        })
    },
    // 加载选中的员工数据
    loadStaffList() {
      this.tableLoading = true
      const {surveyId} = this.$route.query
      const {id} = JSON.parse(sessionStorage.getItem('orgInfo'))
      ResearchIntercalate.queryBySelected(surveyId, id)
        .then((res) => {
          this.rows = res.items
        })
        .catch(() => {
          this.$Message.error('获取用户列表失败！')
        })
        .finally(() => {
          this.tableLoading = false
        })
    },
    next() {
      const {surveyId} = this.$route.query
      this.$router.push({name: 'QuestionnaireDistribution', query: { surveyId: surveyId }})
    }
  }
}

