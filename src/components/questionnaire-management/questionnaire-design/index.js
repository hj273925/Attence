/**
 * Created by hj on 2018/3/30.
 */
import radioTable from './table/index.vue'
import tCard from './card/index.vue'
export default {
  components: {
    radioTable,
    tCard
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
          topic: 'asdasasd',
          content: '',
          items: [{
            type: 'SIMPLE',
            label: 'dasas',
            score: 0
          }]
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
        topic: [
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
      this.$refs.radioTable.resetRows()
    },
    addItems(value) {
      this.formRadio.items = value
    },
    //  单击确定触发
    handleConfirm(name) {
      const self = this
      this.$refs.radioTable.commit()
      this.$refs[name].validate((valid) => {
        if (valid) {
          self.record.items.push(self.formRadio)
          self.$refs[name].resetFields()
          self.$refs.radioTable.resetRows()
          self.modal = false
        }
      })
    }
  }
}

