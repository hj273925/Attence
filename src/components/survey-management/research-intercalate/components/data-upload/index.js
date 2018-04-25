/**
 * Created by hj on 2018/3/30.
 */

export default {
  data() {
    return {
      data: [],
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
    },
    // 点击页脚触发
    next() {
      this.$emit('changePage')
    }
  }
}

