/**
 * Created by hj on 2018/3/30.
 */
import ManageUserService from '@/services/manageUser.service'

export default {
  name: 'ManageUser',
  data() {
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
      groupNameList: [
        {
          value: '集团',
          label: 'New York'
        },
        {
          value: '上汽大众',
          label: 'London'
        },
        {
          value: '上汽大通',
          label: 'Sydney'
        }
      ],
      researchNameList: [
        {
          value: '2015调研',
          label: 'New York'
        },
        {
          value: '2016调研',
          label: 'London'
        },
        {
          value: '2017调研',
          label: 'Sydney'
        }
      ],
      formInline: {
        researchName: '',
        groupName: ''
      },
      groupList: ['上汽大通', '上汽大众'],
      researchList: ['2016调研', '2017调研'],
      data: [],
      selected: [],
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
    deleteGroupName(name) {
      const index = this.groupNameList.indexOf(name)
      this.groupNameList.splice(index, 1)
    },
    deleteResearchName(name) {
      const index = this.researchNameList.indexOf(name)
      this.researchNameList.splice(index, 1)
    },
    // 点击页脚触发
    changePage(index) {
      console.log(index)
    }
  }
}