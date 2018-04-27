/**
 * Created by hj on 2018/3/30.
 */
import ResearchIntercalate from '@/services/researchIntercalate.service'

export default {
  data() {
    return {
      rows: [],
      columns: [
        {
          title: '单位',
          key: 'fullName'
        },
        {
          title: '规模',
          key: 'scale'
        },
        {
          title: '抽样率',
          key: 'sampleRate'
        },
        {
          title: '冗余率',
          key: 'extraRate'
        },
        {
          title: '员工数量',
          key: 'count'
        },
        {
          title: '抽样数量',
          key: 'amount'
        },
        {
          title: '抽样比例',
          key: 'percent'
        },
        {
          title: '发放进度',
          key: 'progess'
        },
        {
          title: '状态',
          key: 'status',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                on: {
                  click: () => {
                    console.log(params)
                  }
                }
              }, '发送')
            ])
          }
        }
      ]
    }
  },
  computed: {
    surveyId() {
      return this.$route.query.id || sessionStorage.getItem('surveyId')
    }
  },
  created() {
    this.loadUserlist()
  },
  methods: {
    // 加载数据
    loadUserlist() {
      this.tableLoading = true
      ResearchIntercalate.getFrantList({surveyId: this.surveyId})
        .then(res => {
          this.rows = res
        })
        .catch(() => {
          this.$Message.error('获取数据列表失败！')
        })
        .finally(() => {
          this.tableLoading = false
        })
    },
    // 点击页脚触发
    next() {
      this.$emit('next')
    },
    prev() {
      this.$emit('prev')
    }
  }
}

