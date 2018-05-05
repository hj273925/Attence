/**
 * Created by hj on 2018/3/30.
 */
import ResearchIntercalate from '@/services/researchIntercalate.service'

export default {
  data() {
    return {
      data: [],
      isCompleted: null,
      columns: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '工号',
          key: 'code'
        },
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '性别',
          key: 'gender'
        },
        {
          title: '电话',
          key: 'phone'
        },
        {
          title: '邮箱',
          key: 'email'
        },
        {
          title: '是否完成',
          render(h, params) {
            let cor = params.row.isCompleted === true ? 'blue' : 'red'
            let status = params.row.isCompleted === true ? '是' : '否'
            return h('Tag', {
              props: {
                color: cor
              }
            }, status)
          }
        },
        {
          title: '完成时间',
          key: 'completedDate'
        }
      ]
    }
  },
  created() {
    this.loadStaffs()
  },
  methods: {
    loadAll() {
      this.isCompleted = null
      this.loadStaffs()
    },
    loadCompleted(yn) {
      this.isCompleted = yn
      this.loadStaffs()
    },
    // 加载数据
    loadStaffs() {
      this.tableLoading = true
      const { surveyId } = this.$route.query
      const { isCompleted, tLimit, current } = this
      ResearchIntercalate.findStaffsByCompleteStatus(surveyId, isCompleted, tLimit, current)
        .then((res) => {
          this.data = res.items
        })
        .catch(() => {
          this.$Message.error('获取用户列表失败！')
        })
        .finally(() => {
          this.tableLoading = false
        })
    },
    // 点击页脚触发
    changePage(index) {
      console.log(index)
    }
  }
}

