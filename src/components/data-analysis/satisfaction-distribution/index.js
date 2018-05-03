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
      rows: ['博士', '硕士', '本科', '大专', '大专以下'],
      tagList: ['集团-2017调研-W3', '集团-2016调研-W3', '集团-2015调研-W3'],
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
    }
  }
}
