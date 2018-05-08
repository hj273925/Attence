/**
 * Created by hj on 2018/3/30.
 */
import AnalysisService from '@/services/analysis.service.js'

export default {
  name: 'ManageUser',
  data() {
    const {researchNameList} = this.$store.state
    return {
      researchNameList,
      groupNameList: [],
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
      rows: [
        {
          key: 'name',
          title: '选项'
        },
        {
          key: 'key1',
          title: '选项1'
        },
        {
          key: 'key2',
          title: '选项2'
        },
        {
          key: 'key3',
          title: '选项3'
        },
        {
          key: 'key4',
          title: '选项4'
        },
        {
          key: 'key5',
          title: '选项5'
        },
        {
          key: 'key6',
          title: '选项6'
        }],
      cols: [{
        name: '集团-2017调研-W3',
        key1: 'asdas',
        key2: 'asd',
        key3: 'asd',
        key4: 'sad',
        key5: 'asd',
        key6: 'dassa'
      }, {
        name: '集团-2016调研-W3',
        key1: 'sd',
        key2: 'asd',
        key3: 'asd',
        key4: 'sad',
        key5: 'asd',
        key6: 'dassa'
      }, {
        name: '集团-2015调研-W3',
        key1: 'sd',
        key2: 'asd',
        key3: 'asd',
        key4: 'sad',
        key5: 'asd',
        key6: 'dassa'
      }],
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
      this.cols.splice(index, 1)
    },
    // 添加标签
    addTag() {
      this.$refs['formInline'].validate((valid) => {
        if (valid) {
          const tag = `${this.formInline.researchName}-${this.formInline.groupName}-${this.formInline.title}`
          this.tagList.push(tag)
          this.cols.push({
            name: tag,
            key1: 'sd',
            key2: 'asd',
            key3: 'asd',
            key4: 'sad',
            key5: 'asd',
            key6: 'dassa'
          })
          this.$refs['formInline'].resetFields()
        }
      })
    }
  }
}
