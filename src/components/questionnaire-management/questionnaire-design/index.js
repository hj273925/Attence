/**
 * Created by hj on 2018/3/30.
 */
import tTable from './table/index.vue'
import tCard from './card/index.vue'
export default {
  components: {
    tTable,
    tCard
  },
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
                  this.data.items.splice(index, 1)
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
        minChoice: [
          { required: true, message: '请输入最小选择数', trigger: 'blur' }
        ],
        maxChoice: [
          { required: true, message: '请输入最大选择数', trigger: 'blur' }
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
      statusList: [{
        label: 'ON',
        value: '开启'
      }, {
        label: 'OFF',
        value: '关闭'
      }],
      data: {},
      index: 0,
      nodeType: '',
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
      }
    }
  },
  methods: {
    addItems(value) {
      this.record.items.push(value)
    },
    // 添加选项
    add(type) {
      this.data.items.push({
        type: type,
        label: '',
        score: 0
      })
    },
    // 删除题型
    deleteItem(index) {
      this.record.items.splice(index, 1)
    },
    // 编辑题型
    editItem(index) {
      const type = this.record.items[index].nodeType
      this.nodeType = this.checkTitle(type)
      this.index = index
      this.data = JSON.parse(JSON.stringify(this.record.items[index]))
      this.model[this.checkTitle(type)] = true
    },
    // 添加矩阵列表
    addMatrixItem(value) {
      this.data[value].push('')
    },
    // 删除矩阵列表
    deleteMatrixItem(index, value) {
      this.data[value].splice(index, 1)
    },
    evaluate(key, value, index) {
      this.data.items[index][key] = value
    },
    // 点击确定
    handleConfirm() {
      this.$refs[this.nodeType].validate((valid) => {
        if (valid) {
          this.record.items[this.index] = JSON.parse(JSON.stringify(this.data))
          this.handleCancel()
        }
      })
    },
    // 点击取消
    handleCancel() {
      const type = this.nodeType
      this.model[type] = false
    },
    // 切换位置
    switchingPosition(action, index) {
      const list = this.record.items
      if (action === 'down') {
        list.splice(index, 2, list[index + 1], list[index])
      } else {
        list.splice(index - 1, 2, list[index], list[index - 1])
      }
    },
    // 检查题型
    checkTitle(value) {
      let type = ''
      switch (value) {
        case 'Q_SINGLE_CHOICE':
          type = 'formRadio'
          break
        case 'Q_MULTIPLE_CHOICE':
          type = 'formCheckBox'
          break
        case 'Q_RANKING':
          type = 'formSort'
          break
        case 'Q_MATRIX':
          type = 'formMatrix'
          break
        case 'Q_OPEN_ENDED':
          type = 'formOpen'
          break
        case 'NOTE':
          type = 'formNote'
          break
      }
      return type
    }
  }
}
