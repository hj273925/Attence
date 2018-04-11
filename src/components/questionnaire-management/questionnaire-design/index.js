/**
 * Created by hj on 2018/3/30.
 */
import radioTable from './table/index.vue'
export default {
  components: {
    radioTable
  },
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
        items: [{
          nodeType: 'Q_SINGLE_CHOICE',
          idx: '',
          topic: '',
          content: '',
          items: []
        }, {
          nodeType: 'Q_MULTIPLE_CHOICE',
          idx: '',
          topic: '',
          content: '',
          items: []
        }]
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
      formMatrix: {
        nodeType: 'Q_MATRIX',
        idx: '',
        topic: '',
        rows: [],
        cols: [],
        scores: []
      },
      formOpen: {
        nodeType: 'Q_OPEN_ENDED',
        idx: '',
        topic: '',
        maxLength: 200,
        labels: []
      },
      formSort: {
        nodeType: 'Q_RANKING',
        idx: '',
        topic: '',
        maxChoice: 2,
        items: [ {
          type: 'SIMPLE',
          label: '',
          score: 0
        }]
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

