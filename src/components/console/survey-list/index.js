/**
 * Created by hj on 2018/3/30.
 */
import ResearchManage from '@/services/ResearchManage.service'
import table from '@/core/mixins/table'
import { debounce } from 'lodash'

export default {
  extends: table(10),
  data() {
    return {
      columns: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '调研名称',
          key: 'name'
        },
        {
          title: '状态',
          width: 100,
          key: 'status',
          render(h, params) {
            let cor = params.row.status === 'ON' ? 'blue' : 'red'
            let status = params.row.status === 'ON' ? '开启' : '关闭'
            return h('Tag', {
              props: {
                color: cor
              }
            }, status)
          }
        },
        {
          title: '计划开始时间',
          key: 'startDate'
        },
        {
          title: '计划结束时间',
          key: 'endDate'
        },
        {
          title: '是否自动催填',
          key: 'autoResend',
          render(h, params) {
            let cor = params.row.autoResend === true ? 'blue' : 'red'
            let autoResend = params.row.autoResend === true ? '是' : '否'
            return h('Tag', {
              props: {
                color: cor
              }
            }, autoResend)
          }
        },
        {
          title: '催填间隔',
          key: 'resendInterval'
        }
      ],
      loading: true
    }
  },
  created() {
    this.loadSurveyByOrgId()
  },
  methods: {
    // 加载数据
    loadSurveyByOrgId() {
      this.tableLoading = true
      const { tSearchWord, tLimit, current } = this
      ResearchManage.getSurveyByOrgId(tSearchWord, tLimit, current)
        .then((res) => {
          this.rows = res.items
          this.total = res.totalNumber
        })
        .catch(() => {
          this.$Message.error('获取调研列表失败！')
        })
        .finally(() => {
          this.tableLoading = false
        })
    },
    // 搜索数据
    searchSurveys: debounce(function () {
      this.current = 1
      this.loadSurveyByOrgId()
    }, 1000),
    // 分页
    changePage(index) {
      this.current = index
      this.loadSurveyByOrgId()
    }
  }
}
