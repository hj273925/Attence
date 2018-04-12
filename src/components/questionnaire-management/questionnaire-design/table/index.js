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
            const score = this.rows[index].score
            return h('input', {
              props: {
                type: 'number'
              },
              attrs: {
                class: 'ivu-input',
                value: score
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
                  this.rows.splice(index, 1)
                }
              }
            }, '删除')
          }
        }
      ],
      rows: [{
        type: 'SIMPLE',
        label: '',
        score: 0
      }]
    }
  },
  methods: {
    add() {
      this.rows.push({
        type: 'SIMPLE',
        label: '',
        score: 0
      })
    },
    evaluate(key, value, index) {
      this.rows[index][key] = value
    },
    resetRows() {
      this.rows = [{
        type: 'SIMPLE',
        label: '',
        score: 0
      }]
    },
    commit() {
      this.$emit('commit', this.rows)
    }
  }
}
