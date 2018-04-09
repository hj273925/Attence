/**
 * Created by hj on 2018/3/30.
 */
export default {
  data() {
    return {
      data: [],
      modal: false,
      statusList: ['新建', '完成'],
      modal_title: '增加题目',
      titleList: [
        {
          name: '你购买的车型？'
        },
        {
          name: '你购买的车型？'
        },
        {
          name: '你购买的车型？'
        },
        {
          name: '你购买的车型？'
        }
      ],
      formCustom: {
        name: '',
        status: ''
      },
      formRadio: {
        name: '',
        content: ''
      },
      ruleRadio: {
        name: [
          { required: true, message: '请输入题目名', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    addTitle() {
      this.modal = true
    },
    // 单击取消触发
    handleCancel(name) {
      this.modal = false
      this.$refs[name].resetFields()
    },
    //  单击确定触发
    handleConfirm(name) {
      const self = this
      this.$refs[name].validate((valid) => {
        if (valid) {
          self.titleList.push(self.formRadio)
          self.modal = false
          self.$refs[name].resetFields()
        }
      })
    }
  }
}

