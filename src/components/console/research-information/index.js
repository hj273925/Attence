/**
 * Created by hj on 2018/3/30.
 */
import ResearchIntercalate from '@/services/researchIntercalate.service'

export default {
  data() {
    return {
      columns: [
        {
          title: '单位',
          key: 'name'
        },
        {
          title: '规模',
          key: 'orgId'
        },
        {
          title: '抽样率',
          key: 'title'
        },
        {
          title: '冗余率',
          key: 'mobile'
        }
      ],
      data: []
    }
  },
  created() {
    this.loadUserlist()
    console.log(this.$store.state.orgInfo)
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
    changePage(index) {
      console.log(index)
    }
  }
}

