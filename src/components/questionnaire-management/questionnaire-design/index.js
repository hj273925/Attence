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
      record: {
        name: '',
        title: '',
        subTitle: '',
        status: 'ON',
        items: []
      },
      formCustom: {
        name: '',
        status: ''
      },
      formRadio: {
        nodeType: 'Q_SINGLE_CHOICE',
        idx: '',
        topic: '',
        content: '',
        items: []
      },
      formCheckBox: {
        nodeType: 'Q_MULTIPLE_CHOICE',
        idx: '',
        topic: '',
        content: '',
        items: [],
        minChoice: 1,
        maxChoice: 2

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

