/**
 * Created by hj on 2018/3/30.
 */

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
    }
  }
}

