/**
 * Created by hj on 2018/3/30.
 */
// import ResearchIntercalate from '@/services/researchIntercalate.service'
import OrganizationService from '@/services/organization.service'
import table from '@/core/mixins/table'
import { debounce } from 'lodash'

export default {
  data() {
    return {
      columns: [
        {
          title: '全称',
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
        }
      ],
      rows: [],
      loading: true,
      tableLoading: false,
      record: {}
    }
  },
  created() {
    this.loadOrglist()
    console.log(this.$store.state.orgInfo)
  },
  methods: {
    // 加载数据
    loadOrglist() {
      this.tableLoading = true
      this.rows = [this.$store.state.orgInfo]
      // OrganizationService.getOrganizations()
      //   .then((res) => {
      //     this.rows = res.items
      //     this.total = res.totalNumber
      //   })
      //   .catch(() => {
      //     this.$Message.error('获取组织列表失败！')
      //   })
      //   .finally(() => {
      //     this.tableLoading = false
      //   })
    }
  }
}

