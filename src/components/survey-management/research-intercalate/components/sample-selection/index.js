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
          title: '状态',
          key: 'status',
          render(h, params) {
            let cor = params.row.status === 'ON' ? 'blue' : 'red'
            let status = params.row.status === 'ON' ? '已确认' : '未确认'
            return h('Tag', {
              props: {
                color: cor
              }
            }, status)
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
      ResearchIntercalate.getFilterList({surveyId: this.surveyId})
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
    next() {
      this.$emit('next')
    },
    prev() {
      this.$emit('prev')
    }
  }
}

