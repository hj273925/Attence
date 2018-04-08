/**
 * Created by hj on 2018/3/30.
 */
import ManageUserService from '@/services/manageUser.service'

export default {
  name: 'ManageUser',
  data() {
    return {
      data: []
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
    // 多选触发事件
    selectChange(selection) {
      this.selected = selection
    },
    // 删除用户
    deleteUsers() {
      ManageUserService.deleteUser(this.selected)
        .then(() => {
          this.$Message.success('用户已删除！')
        })
        .catch(() => {
          this.$Message.error('删除用户失败！')
        })
    },
    // 点击页脚触发
    changePage(index) {
      console.log(index)
    }
  }
}

