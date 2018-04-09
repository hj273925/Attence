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
      researchName: [
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
      titleList: [
        {
          value: 'W1',
          label: 'New York'
        },
        {
          value: 'W2',
          label: 'London'
        },
        {
          value: 'W3',
          label: 'Sydney'
        }
      ],
      formInline: {
        researchName: '',
        groupName: '',
        title: ''
      },
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
