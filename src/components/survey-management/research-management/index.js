/**
 * Created by hj on 2018/3/30.
 */
import ResearchManage from '@/services/ResearchManage.service'
import table from '@/core/mixins/table'
import { debounce } from 'lodash'

export default {
  name: 'ResearchManage',
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
          key: 'name',
          render: (h, params) => {
            return h('a', {
              style: {
                color: 'blue'
              },
              on: {
                click: () => {
                  this.clickRow(params.row)
                }
              }
            }, params.row.name)
          }
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
            let cor = params.row.status === 'true' ? 'blue' : 'red'
            let autoResend = params.row.status === 'true' ? '是' : '否'
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
      selected: [],
      loading: true,
      record: {}
    }
  },
  created() {
    this.loadResearchList()
  },
  methods: {
    // 加载数据
    loadResearchList() {
      this.tableLoading = true
      const { tSearchWord, tLimit, current } = this
      ResearchManage.getResearch(tSearchWord, tLimit, current)
        .then((res) => {
          this.rows = res.items
          this.total = res.totalNumber
        })
        .catch(() => {
          this.$Message.error('获取问卷列表失败！')
        })
        .finally(() => {
          this.tableLoading = false
        })
    },
    // 搜索数据
    searchResearch: debounce(function () {
      this.current = 1
      this.loadResearchList()
    }, 1000),
    // 多选触发事件
    selectChange(selection) {
      this.selected = selection
    },
    // 跳转到调研设置
    addResearch() {
    },
    // 单击表格
    clickRow(data) {
    },
    // 删除问卷
    deleteResearch() {
      let selections = []
      this.selected.forEach((value) => {
        selections.push(value.id)
      })
      ResearchManage.deleteResearch(selections)
        .then(() => {
          this.$Message.success('调研事件已删除！')
          this.selected = []
          this.loadResearchList()
        })
        .catch(() => {
          this.$Message.error('删除调研事件失败！')
        })
    },
    // 分页
    changePage(index) {
      this.current = index
      this.loadResearchList()
    }
  }
}
