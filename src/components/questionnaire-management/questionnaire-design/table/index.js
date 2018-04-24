/**
 * Created by hj on 2018/4/11.
 */
const record = {
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
    minChoice: 0,
    maxChoice: 0
  },
  formMatrix: {
    nodeType: 'Q_MATRIX',
    idx: '',
    topic: '',
    rows: [''],
    cols: [''],
    scores: ['']
  },
  formOpen: {
    nodeType: 'Q_OPEN_ENDED',
    idx: '',
    topic: '',
    maxLength: 200,
    labels: ['']
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
            return h('InputNumber', {
              attrs: {
                min: 0,
                value: params.row.score
              },
              on: {
                'on-change': (value) => {
                  this.evaluate('score', value, index)
                }
              }
            })
          }
        },
        {
          title: '类型',
          key: 'type',
          width: '20%',
          render: (h, params) => {
            let cor = params.row.type === 'SIMPLE' ? 'blue' : 'red'
            let type = params.row.type === 'SIMPLE' ? '普通' : '其它'
            return h('Tag', {
              props: {
                color: cor
              }
            }, type)
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
                  this[this.nodeType].items.splice(index, 1)
                }
              }
            }, '删除')
          }
        }
      ],
      rule: {
        topic: [
          { required: true, message: '请输入题目名', trigger: 'blur' }
        ],
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
        minChoice: 0,
        maxChoice: 0
      },
      formMatrix: {
        nodeType: 'Q_MATRIX',
        idx: '',
        topic: '',
        rows: [''],
        cols: [''],
        scores: [0]
      },
      formOpen: {
        nodeType: 'Q_OPEN_ENDED',
        idx: '',
        topic: '',
        maxLength: 200,
        labels: ['']
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
    add(type) {
      this[this.nodeType].items.push({
        type: type,
        label: '',
        score: 0
      })
    },
    // 点击添加按钮
    addTitle(value) {
      this.model[value] = true
      this.nodeType = value
    },
    // 添加矩阵列表
    addMatrixItem(value) {
      this[this.nodeType][value].push('')
    },
    // 删除矩阵列表
    deleteMatrixItem(index, value) {
      this[this.nodeType][value].splice(index, 1)
    },
    evaluate(key, value, index) {
      this[this.nodeType].items[index][key] = value
    },
    // 清空表单
    resetRows() {
      this.$refs[this.nodeType].resetFields()
      const type = this.nodeType
      this[type] = JSON.parse(JSON.stringify(record[type]))
    },
    // 传递数据给父组件
    handleConfirm() {
      this.$refs[this.nodeType].validate((valid) => {
        if (valid) {
          const data = JSON.parse(JSON.stringify(this[this.nodeType]))
          this.$emit('handleConfirm', data)
          this.handleCancel()
        }
      })
    },
    // 点击取消
    handleCancel() {
      this.model[this.nodeType] = false
      this.resetRows()
    }
  }
}
