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
        },
        {
          title: '上传员工数量',
          key: 'count'
        },
        {
          title: '状态',
          key: 'status'
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
      ResearchIntercalate.getData({surveyId: '5add4e5484f19c2b78743945'})
        .then(res => {
          this.rows = res
        })
        .catch(() => {
          this.$Message.error('获取数据列表失败！')
        })
    },
    // 上传数据
    upload() {
      console.log('ok')
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

