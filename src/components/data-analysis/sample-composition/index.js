/**
 * Created by hj on 2018/3/30.
 */
import ManageUserService from '@/services/manageUser.service'

export default {
  data() {
    const {groupNameList, researchNameList} = this.$store.state
    return {
      columns: [
        {
          title: '用户名',
          key: 'name'
        },
        {
          title: '单位',
          key: 'orgId'
        },
        {
          title: '职务',
          key: 'title'
        },
        {
          title: '手机',
          key: 'mobile'
        },
        {
          title: '邮箱',
          key: 'email'
        },
        {
          title: '状态',
          key: 'status'
        },
        {
          title: '创建时间',
          key: 'createTime'
        }
      ],
      groupNameList,
      researchNameList,
      formInline: {
        researchName: '',
        groupName: ''
      },
      tagList: ['2016问卷', '2017问卷'],
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
    // 添加标签
    addTag() {
      const tag = `${this.formInline.researchName}-${this.formInline.groupName}`
      this.tagList.push(tag)
    },
    // 删除标签
    deleteTag(name) {
      const index = this.tagList.indexOf(name)
      this.tagList.splice(index, 1)
    },
    // 点击页脚触发
    changePage(index) {
      console.log(index)
    }
  }
}
