/**
 * Created by hj on 2018/3/30.
 */
import AnalysisService from '@/services/analysis.service.js'

export default {
  name: 'ManageUser',
  data() {
    return {
      groupNameList: [],
      researchNameList: [],
      titleList: [],
      formInline: {
        researchName: '',
        groupName: '',
        title: ''
      },
      formRule: {
        researchName: [
          { required: true, message: '请选择组织名', trigger: 'blur' }
        ],
        groupName: [
          { required: true, message: '请选择调研名', trigger: 'blur' }
        ],
        title: [
          { required: true, message: '请选择题目名', trigger: 'blur' }
        ]
      },
      rows: ['选项1', '选项2', '选项3', '选项4', '选项5', '选项6'],
      tagList: ['集团-2017调研-W3', '集团-2016调研-W3', '集团-2015调研-W3'],
      data: [1, 2, 3],
      tableLoading: false
    }
  },
  created() {
    AnalysisService.getSurveyList()
      .then((res) => {
        console.log(res)
        this.researchNameList = res
      })
      .catch(() => {
        this.$Message.error('获取数据失败！')
    })
  },
  methods: {
    onSurveyChange(val) {
      console.log(val)
      AnalysisService.getSurveyOrgList(val)
        .then((res) => {
          this.groupNameList = res
        })
        .catch(() => {
          this.$Message.error('获取数据失败！')
        })
      AnalysisService.getSurveyQuestionList(val)
        .then((res) => {
          this.titleList = res
        })
        .catch(() => {
          this.$Message.error('获取数据失败！')
        })
    },
    // 删除标签
    deleteTag(name) {
      const index = this.tagList.indexOf(name)
      this.tagList.splice(index, 1)
    },
    // 添加标签
    addTag() {
      this.$refs['formInline'].validate((valid) => {
        if (valid) {
          const tag = `${this.formInline.researchName}-${this.formInline.groupName}-${this.formInline.title}`
          this.tagList.push(tag)
          this.$refs['formInline'].resetFields()
        }
      })
    }
  }
}
