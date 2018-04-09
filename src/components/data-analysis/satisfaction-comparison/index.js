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
      cityList: [
        {
          value: 'New York',
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London'
        },
        {
          value: 'Sydney',
          label: 'Sydney'
        },
        {
          value: 'Ottawa',
          label: 'Ottawa'
        },
        {
          value: 'Paris',
          label: 'Paris'
        },
        {
          value: 'Canberra',
          label: 'Canberra'
        }
      ],
      formInline: {
        researchName: '',
        groupName: ''
      },
      groupNameList: ['上汽大通', '上汽大众'],
      researchNameList: ['2016调研', '2017调研'],
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
