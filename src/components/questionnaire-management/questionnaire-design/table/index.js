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
            return h('Input', {
              props: {
                value: params.row.label
              }
            })
          }
        },
        {
          title: '分值',
          key: 'score',
          width: '20%',
          render: (h, params) => {
            return h('Input', {
              props: {
                type: 'number',
                value: params.row.score
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
    }
  }
}
