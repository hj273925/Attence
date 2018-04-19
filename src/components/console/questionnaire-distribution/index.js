/**
 * Created by hj on 2018/3/30.
 */
import ResearchIntercalate from '@/services/researchIntercalate.service'

export default {
  data() {
    return {
      data: [],
      columns: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '工号',
          key: 'name'
        },
        {
          title: '员工类型',
          key: 'orgId'
        },
        {
          title: '姓名',
          key: 'title'
        },
        {
          title: '性别',
          key: 'mobile'
        },
        {
          title: '出生年份',
          key: 'count'
        },
        {
          title: '学历',
          key: 'amount'
        }
      ]
    }
  },
  created() {
    this.loadUserlist()
  },
  methods: {
    // 加载数据
    loadUserlist() {
      this.tableLoading = true
      ResearchIntercalate.getOrganizations()
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
    next() {
      this.$emit('changePage')
    }
  }
}

