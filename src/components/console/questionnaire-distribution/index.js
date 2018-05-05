/**
 * Created by hj on 2018/3/30.
 */
import ResearchIntercalate from '@/services/researchIntercalate.service'

export default {
  data() {
    return {
      isNotified: null,
      data: [],
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
          title: '是否发放',
          render(h, params) {
            let cor = params.row.isNotified === true ? 'blue' : 'red'
            let status = params.row.isNotified === true ? '是' : '否'
            return h('Tag', {
              props: {
                color: cor
              }
            }, status)
          }
        },
        {
          title: '发放时间',
          key: 'notifiedDate'
        }
      ]
    }
  },
  created() {
    this.loadStaffs()
  },
  methods: {
    loadAll() {
      this.isNotified = null
      this.loadStaffs()
    },
    loadNotified(yn) {
      this.isNotified = yn
      this.loadStaffs()
    },
    // 加载数据
    loadStaffs() {
      this.tableLoading = true
      const { surveyId } = this.$route.query
      const { isNotified, tLimit, current } = this
      ResearchIntercalate.findStaffsByNotifiedStatus(surveyId, isNotified, tLimit, current)
        .then((res) => {
          this.data = res.items
        })
        .catch(() => {
          this.$Message.error('获取数据失败！')
        })
        .finally(() => {
          this.tableLoading = false
        })
    },
    // 点击页脚触发
    next() {
      const {surveyId} = this.$route.query
      this.$router.push({name: 'FillProgress', query: { surveyId: surveyId }})
    }
  }
}

