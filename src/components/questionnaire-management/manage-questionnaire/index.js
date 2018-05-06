/**
 * Created by hj on 2018/3/30.
 */
import ManageQuestionnaire from '@/services/questionnaire.service'
import table from '@/core/mixins/table'
import { debounce } from 'lodash'

export default {
  name: 'ManageQuestionnaire',
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
          title: '问卷名称',
          key: 'name',
          render: (h, params) => {
            return h('a', {
              style: {
                color: 'blue'
              },
              on: {
                click: () => {
                  this.addQuestionnaire(params.row)
                }
              }
            }, params.row.name)
          }
        },
        {
          title: '问卷标题',
          key: 'title'
        },
        {
          title: '状态',
          width: 100,
          key: 'status',
          render(h, params) {
            let cor = params.row.status === 'ON' ? 'blue' : 'red'
            let status = params.row.status === 'ON' ? '启用' : '禁用'
            return h('Tag', {
              props: {
                color: cor
              }
            }, status)
          }
        },
        {
          title: '创建时间',
          key: 'createdAt'
        },
        {
          title: '创建人',
          key: 'createBy'
        }
      ],
      selected: [],
      loading: true,
      record: {}
    }
  },
  created() {
    this.loadQuestionnaireList()
  },
  methods: {
    // 加载数据
    loadQuestionnaireList() {
      this.tableLoading = true
      const { tSearchWord, tLimit, current } = this
      ManageQuestionnaire.getQuestionnaire(tSearchWord, tLimit, current)
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
    searchQuestionnaire: debounce(function () {
      this.current = 1
      this.loadQuestionnaireList()
    }, 1000),
    // 多选触发事件
    selectChange(selection) {
      this.selected = selection
    },
    // 跳转到问卷设计
    addQuestionnaire(value) {
      this.$router.push({name: 'QuestionnaireDesign', query: { id: value.id }})
    },
    // 删除问卷
    deleteQuestionnaire() {
      let selections = []
      this.selected.forEach((value) => {
        selections.push(value.id)
      })
      ManageQuestionnaire.deleteQuestionnaire(selections)
        .then(() => {
          this.$Message.success('问卷已删除！')
          this.selected = []
          this.loadQuestionnaireList()
        })
        .catch(() => {
          this.$Message.error('删除问卷失败！')
        })
    },
    // 分页
    changePage(index) {
      this.current = index
      this.loadQuestionnaireList()
    }
  }
}
