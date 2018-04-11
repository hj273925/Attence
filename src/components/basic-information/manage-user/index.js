/**
 * Created by hj on 2018/3/30.
 */
import ManageUserService from '@/services/manageUser.service'
import table from '@/core/mixins/table'

export default {
  name: 'ManageUser',
  extends: table(2),
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
          key: 'name',
          render: (h, params) => {
            return h('a', {
              style: {
                color: 'blue'
              },
              on: {
                click: () => {
                  this.clickRow(params.row)
                }
              }
            }, params.row.name)
          }
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
          width: 180,
          key: 'email'
        },
        {
          title: '状态',
          width: 100,
          key: 'status',
          render(h, params) {
            let cor = params.row.status === 'ON' ? 'blue' : 'red'
            let status = params.row.status === 'ON' ? '开启' : '关闭'
            return h('Tag', {
              props: {
                color: cor
              }
            }, status)
          }
        },
        {
          title: '创建时间',
          key: 'createdAt'
        }
      ],
      formCustom: {
        name: '',
        password: '',
        gender: '',
        orgId: '',
        title: '',
        mobile: '',
        email: '',
        note: '',
        status: ''
      },
      ruleCustom: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入用户密码', trigger: 'blur' }
        ],
        gender: [
          { required: true, message: '请选择用户性别', trigger: 'blur' }
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
        ],
        note: [
          { required: true, message: '请输入用户备注', trigger: 'blur' }
        ],
        status: [
          { required: true, message: '请选择用户状态', trigger: 'blur' }
        ]
      },
      selected: [],
      loading: true,
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
      const { tLimit, current, tSearchWord } = this
      ManageUserService.getUsers(tSearchWord, tLimit, current)
        .then((res) => {
          this.rows = res.items
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
    },
    // 删除用户
    deleteUsers() {
      let selections = []
      this.selected.forEach((value) => {
        selections.push(value.id)
      })
      ManageUserService.deleteUser(selections)
        .then(() => {
          this.$Message.success('用户已删除！')
          this.selected = []
          this.loadUserlist()
        })
        .catch(() => {
          this.$Message.error('删除用户失败！')
        })
    }
  }
}
