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
          render(h, params) {
            var val = (params.row.sampleRate * 100).toFixed(2)
            return h('span', [val, '%'].join(''))
          }
        },
        {
          title: '冗余率',
          render(h, params) {
            var val = (params.row.extraRate * 100).toFixed(2)
            return h('span', [val, '%'].join(''))
          }
        },
        {
          title: '上传数量',
          key: 'totalStaffs'
        },
        {
          title: '抽样数量',
          key: 'realSampleCount'
        },
        {
          title: '抽样比例',
          render(h, params) {
            var val = (params.row.realSampleRate * 100).toFixed(2)
            return h('span', [val, '%'].join(''))
          }
        },
        {
          title: '状态',
          key: 'status',
          render(h, params) {
            let cor = params.row.selectedConfirm === 'ON' ? 'blue' : 'red'
            let status = params.row.selectedConfirm === 'ON' ? '已确认' : '未确认'
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

