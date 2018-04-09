/**
 * Created by hj on 2018/3/30.
 */
import OrganizationService from '@/services/organization.service'

export default {
  name: 'ManageOrg',
  data() {
    return {
      columns: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '代码',
          key: 'code'
        },
        {
          title: '全称',
          key: 'fullName'
        },
        {
          title: '简称',
          key: 'shortName'
        },
        {
          title: '规模',
          key: 'scale'
        },
        {
          title: '抽样率',
          key: 'sampleRate'
        },
        {
          title: '冗余率',
          key: 'extraRate'
        },
        {
          title: '状态',
          key: 'status'
        }
      ],
      formCustom: {
        code: '',
        fullName: '',
        shortName: '',
        scale: '',
        sampleRate: '',
        extraRate: '',
        status: ''
      },
      ruleCustom: {
        code: [
          { required: true, message: '请输入组织代码', trigger: 'blur' }
        ],
        fullName: [
          { required: true, message: '请输入组织全称', trigger: 'blur' }
        ],
        shortName: [
          { required: true, message: '请输入组织简称', trigger: 'blur' }
        ],
        scale: [
          { required: true, message: '请输入组织规模', trigger: 'blur' }
        ],
        sampleRate: [
          { required: true, message: '请输入组织抽样率', trigger: 'blur' }
        ],
        extraRate: [
          { required: true, message: '请输入组织冗余率', trigger: 'blur' }
        ],
        status: [
          { required: true, message: '请选择组织状态', trigger: 'blur' }
        ]
      },
      data: [],
      selected: [],
      loading: true,
      tableLoading: false,
      modal_loading: false,
      modal: false,
      modal_title: '增加组织',
      record: {}
    }
  },
  created() {
    this.loadOrglist()
  },
  methods: {
    // 加载数据
    loadOrglist() {
      this.tableLoading = true
      OrganizationService.getOrganizations()
        .then((res) => {
          this.data = res.items
        })
        .catch(() => {
          this.$Message.error('获取组织列表失败！')
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
      this.modal_title = '增加组织'
      this.formCustom = {}
      this.modal = true
    },
    // 单击表格
    clickRow(data) {
      this.modal_title = '编辑组织'
      this.formCustom = data
      this.modal = true
    },
    // 增加组织
    addOrganization() {
      OrganizationService.addOrganization(this.formCustom)
        .then(() => {
          this.modal = false
          this.loadOrglist()
        })
        .catch((error) => {
          if (error.response.status === 409) {
            this.$Message.error('组织已存在！')
          } else {
            this.$Message.error('增加组织失败！')
          }
        })
        .finally(() => {
          this.modal_loading = false
        })
    },
    // 编辑组织信息
    editOrganization() {
      OrganizationService.editOrganization(this.formCustom)
        .then(() => {
          this.modal = false
          this.loadOrglist()
        })
        .catch((error) => {
          if (error.response.status === 409) {
            this.$Message.error('组织已存在！')
          } else {
            this.$Message.error('组织编辑失败！')
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
          if (self.modal_title === '增加组织') {
            self.addOrganization()
          } else {
            self.editOrganization()
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
    deleteOrgs() {
      OrganizationService.deleteOrganization(this.selected)
        .then(() => {
          this.$Message.success('组织已删除！')
          this.loadOrglist()
        })
        .catch(() => {
          this.$Message.error('删除组织失败！')
        })
    },
    // 点击页脚触发
    changePage(index) {
      console.log(index)
    }
  }
}
