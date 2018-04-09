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
          type: 'selection',
          width: 60,
          align: 'center'
        },
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
      formCustom: {
        name: '',
        orgId: '',
        title: '',
        mobile: '',
        email: ''
      },
      ruleCustom: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        orgId: [
          { required: true, message: '请输入用户单位', trigger: 'blur' }
        ],
        title: [
          { required: true, message: '请输入用户职务', trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '请输入用户手机号', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入用户邮箱', trigger: 'blur' },
          { type: 'email', message: '邮箱格式错误', trigger: 'blur' }
        ]
      },
      data: [],
      selected: [],
      loading: true,
      tableLoading: false,
      modal_loading: false,
      modal: false,
      modal_title: '增加用户',
      record: {}
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
    showModal() {
      this.modal_title = '增加用户'
      this.formCustom = {}
      this.modal = true
    },
    // 单击表格
    clickRow(data) {
      this.modal_title = '编辑用户'
      this.formCustom = data
      this.modal = true
    },
    // 增加用户
    addUser() {
      ManageUserService.addUser(this.formCustom)
        .then(() => {
          this.modal = false
          this.loadUserlist()
        })
        .catch((error) => {
          if (error.response.status === 409) {
            this.$Message.error('用户已存在！')
          } else {
            this.$Message.error('增加用户失败！')
          }
        })
        .finally(() => {
          this.modal_loading = false
        })
    },
    // 编辑用户信息
    editUser() {
      ManageUserService.editUser(this.formCustom)
        .then(() => {
          this.modal = false
          this.loadUserlist()
        })
        .catch((error) => {
          if (error.response.status === 409) {
            this.$Message.error('用户已存在！')
          } else {
            this.$Message.error('用户编辑失败！')
          }
        })
        .finally(() => {
          this.modal_loading = false
        })
    },
    //  单击确定触发
    handleConfirm(name) {
      const self = this
      this.$refs[name].validate((valid) => {
        if (valid) {
          self.modal_loading = true
          if (self.modal_title === '增加用户') {
            self.addUser()
          } else {
            self.editUser()
          }
        }
      })
    },
    // 单击取消触发
    handleCancel(name) {
      this.modal = false
      this.$refs[name].resetFields()
    },
    // 删除用户
    deleteUsers() {
      ManageUserService.deleteUser(this.selected)
        .then(() => {
          this.$Message.success('用户已删除！')
          this.loadUserlist()
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
