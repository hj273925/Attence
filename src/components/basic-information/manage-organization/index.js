/**
 * Created by hj on 2018/3/30.
 */
import OrganizationService from '@/services/organization.service'

export default {
  name: 'app',
  data() {
    return {
      modal: false,
      currentLineInfo: false,
      ruleOrg: {
        code: [{ required: true, message: '请输入代码', trigger: 'blur' }],
        fullName: [{ required: true, message: '请输入全称', trigger: 'blur' }],
        abbreviation: [{ required: true, message: '请输入简称', trigger: 'blur' }],
        scale: [{ required: true, message: '请输入规模', trigger: 'blur' }],
        sample: [{ required: true, message: '请输入抽样率', trigger: 'blur' }],
        redundancy: [{ required: true, message: '请输入冗余率', trigger: 'blur' }],
        state: [{ required: true, message: '请输入状态', trigger: 'blur' }]
      },
      formOrganize: {
        code: '',
        fullName: '',
        abbreviation: '',
        scale: '',
        sample: '',
        redundancy: '',
        state: ''
      },
      formOrganizeLine: {
        code: '',
        fullName: '',
        abbreviation: '',
        scale: '',
        sample: '',
        redundancy: '',
        state: ''
      },
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
          key: 'abbreviation'
        },
        {
          title: '规模',
          key: 'scale'
        },
        {
          title: '抽样率',
          key: 'sample'
        },
        {
          title: '冗余率',
          key: 'redundancy'
        },
        {
          title: '状态',
          key: 'state'
        }
      ],
      data: [
        {
          code: '0',
          fullName: 'nnn'
        },
        {
          code: '0',
          fullName: 'nnn',
          state: 'kai'
        }
      ],
      selected: [],
      tableLoading: false,
      loading: true
    }
  },
  created() {
    this.loadOrglist()
  },
  methods: {
    currentLine(info) {
      this.currentLineInfo = true
      this.formOrganizeLine = info
    },
    selectChange(selection) {
      this.selected = selection
    },
    loadOrglist() {
      this.tableLoading = true
      OrganizationService.getOrganizations()
        .then((res) => {
          this.data = res.items
          this.tableLoading = false
        })
        .catch(() => {
          this.tableLoading = false
          this.$Message.error('获取组织列表失败！')
        })
    },
    deleteOrgs() {
      OrganizationService.deteleUser(this.selected)
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
    handleCancelLine(name) {
      this.$refs[name].resetFields()
    },
    handleConfirmLine(info) {
      console.log(0)
    },
    handleConfirm(name) {
      const self = this
      this.$refs[name].validate((valid) => {
        if (valid) {
          OrganizationService.addUser(self.formOrganize)
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
    }
  }
}
