/**
 * Created by hj on 2018/3/30.
 */
import ManageUserService from '@/services/manageUser.service'
import QuestionnaireSetting from '../research-intercalate/components/questionnaire-setting/index.vue'
import DataUpload from '../research-intercalate/components/data-upload/index.vue'
import SampleSelection from '../research-intercalate/components/sample-selection/index.vue'
import QuestionnaireDistribution from '../research-intercalate/components/questionnaire-distribution/index.vue'
import FillProgress from '../research-intercalate/components/fill-progress/index.vue'

export default {
  name: 'ManageUser',
  components: {
    QuestionnaireSetting,
    DataUpload,
    SampleSelection,
    QuestionnaireDistribution,
    FillProgress
  },
  data() {
    return {
      data: [],
      current: 0
    }
  },
  created() {
    this.loadUserlist()
  },
  methods: {
    // 加载数据
    loadUserlist() {
      this.tableLoading = true
      ManageUserService.getUsers()
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
    // 多选触发事件
    selectChange(selection) {
      this.selected = selection
    },
    // 删除用户
    deleteUsers() {
      ManageUserService.deleteUser(this.selected)
        .then(() => {
          this.$Message.success('用户已删除！')
        })
        .catch(() => {
          this.$Message.error('删除用户失败！')
        })
    },
    next() {
      if (this.current === 4) {
        this.current = 0
      } else {
        this.current += 1
      }
    },
    prev() {
      if (this.current === 0) {
        this.current = 0
      } else {
        this.current -= 1
      }
    }
  }
}

