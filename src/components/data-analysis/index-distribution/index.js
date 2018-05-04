/**
 * Created by hj on 2018/3/30.
 */
import ManageUserService from '@/services/manageUser.service'

export default {
  name: 'ManageUser',
  data() {
    const {groupNameList, researchNameList, titleList} = this.$store.state
    return {
      groupNameList,
      researchNameList,
      titleList,
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
      rows: ['企业形象', '企业文化', '企业认同感归属感', '发展战略', '管理机制', '领导干部'],
      tagList: ['集团-2017调研', '集团-2016调研', '集团-2015调研'],
      data: [],
      tableLoading: false
    }
  },
  created() {
    this.loadUserlist()
  },
  methods: {
    // 加载数据
    loadUserlist() {
      this.tableLoading = true
      ManageUserService.getUsers()
        .then((res) => {
          this.data = res.items
        })
        .catch(() => {
          this.$Message.error('获取用户列表失败！')
        })
        .finally(() => {
          this.tableLoading = false
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
