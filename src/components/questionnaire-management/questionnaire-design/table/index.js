/**
 * Created by hj on 2018/4/11.
 */

export default {
  data() {
    return {
      columns: [
        {
          title: '选项',
          key: 'label',
          render: (h, params) => {
            const { index } = params
            return h('input', {
              attrs: {
                class: 'ivu-input',
                value: params.row.label
              },
              on: {
                blur: (e) => {
                  // this.rows[index].label = e.target.value
                  this.evaluate('label', e.target.value, index)
                }
              }
            })
          }
        },
        {
          title: '分值',
          key: 'score',
          width: '20%',
          render: (h, params) => {
            const { index } = params
            return h('input', {
              props: {
                type: 'number'
              },
              attrs: {
                class: 'ivu-input',
                value: params.row.score
              },
              on: {
                blur: (e) => {
                  this.evaluate('score', e.target.value, index)
                }
              }
            })
          }
        },
        {
          title: '操作',
          key: 'score',
          width: '20%',
          render: (h, params) => {
            return h('Button', {
              props: {
                type: 'error'
              },
              on: {
                click: () => {
                  const { index } = params
                  this.record[this.nodeType].items.splice(index, 1)
                }
              }
            }, '删除')
          }
        }
      ],
      rule: {
        topic: [
          { required: true, message: '请输入题目名', trigger: 'blur' }
        ]
      },
      contentRule: {
        content: [
          { required: true, message: '请输入备注内容', trigger: 'blur' }
        ]
      },
      model: {
        formRadio: false,
        formCheckBox: false,
        formSort: false,
        formMatrix: false,
        formOpen: false,
        formNote: false
      },
      modal: false,
      modal_title: {
        formRadio: '单选题',
        formCheckBox: '多选题',
        formSort: '排序题',
        formMatrix: '矩阵题',
        formOpen: '开放题',
        formNote: '备注'
      },
      nodeType: '',
      formRadio: {
        nodeType: 'Q_SINGLE_CHOICE',
        idx: '',
        topic: '',
        content: '',
        items: [{
          type: 'SIMPLE',
          label: '',
          score: 0
        }]
      },
      formCheckBox: {
        nodeType: 'Q_MULTIPLE_CHOICE',
        idx: '',
        topic: '',
        content: '',
        items: [{
          type: 'SIMPLE',
          label: '',
          score: 0
        }],
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
      formNote: {
        nodeType: 'NOTE',
        content: ''
      }
    }
  },
  methods: {
    add() {
      this[this.nodeType].items.push({
        type: 'SIMPLE',
        label: '',
        score: 0
      })
    },
    // 点击添加按钮
    addTitle(value) {
      this.model[value] = true
      this.nodeType = value
    },
    evaluate(key, value, index) {
      this[this.nodeType].items[index][key] = value
    },
    resetRows() {
      this.$refs[this.nodeType].resetFields()
      this[this.nodeType].items = [{
        type: 'SIMPLE',
        label: '',
        score: 0
      }]
    },
    handleConfirm() {
      this.$refs[this.nodeType].validate((valid) => {
        if (valid) {
          const data = JSON.parse(JSON.stringify(this[this.nodeType]))
          this.$emit('handleConfirm', data)
          this.handleCancel()
          this.resetRows()
        }
      })
    },
    handleCancel() {
      this.model[this.nodeType] = false
      this.resetRows()
    }

  }
}
