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
          key: 'age'
        },
        {
          title: '职务',
          key: 'address'
        },
        {
          title: '手机',
          key: 'telephone'
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
          key: 'time'
        }
      ],
      formCustom: {
        name: '',
        employer: '',
        post: '',
        telephone: '',
        email: ''
      },
      ruleCustom: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        employer: [
          { required: true, message: '请输入用户单位', trigger: 'blur' }
        ],
        post: [
          { required: true, message: '请输入用户职务', trigger: 'blur' }
        ],
        telephone: [
          { required: true, message: '请输入用户手机号', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入用户邮箱', trigger: 'blur' }
        ]
      },
      data: [
        {name: 'dasas'},
        {name: 'asdasas'}
      ],
      selected: [],
      loading: true,
      modal: false,
      record: {}
    }
  },
  created() {
    this.loadUserlist()
  },
  methods: {
    loadUserlist() {
      ManageUserService.getUsers()
        .then((res) => {
          this.data = res.items
        })
        .catch(() => {
          this.$Message.error('获取用户列表失败！')
        })
    },
    selectChange(selection) {
      this.selected = selection
    },
    handleConfirm(name) {
      const self = this
      this.$refs[name].validate((valid) => {
        if (valid) {
          ManageUserService.addUser(self.formCustom)
            .then(() => {
              self.loading = false
            })
            .catch((error) => {
              if (error.response.status === 409) {
                self.$Message.error('用户已存在！')
              } else {
                self.$Message.error('增加用户失败！')
              }
            })
        }
      })
    },
    deleteUsers() {
      ManageUserService.deteleUser(this.selected)
        .then(() => {
          this.$Message.success('用户已删除！')
        })
        .catch(() => {
          this.$Message.error('删除用户失败！')
        })
    },
    handleCancel(name) {
      this.$refs[name].resetFields()
    },
    changePage(index) {
      console.log(index)
    }
  }
}
