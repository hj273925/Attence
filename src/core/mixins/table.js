/**
 * Created by hj on 2018/4/10.
 */
import { debounce } from 'lodash'
import ManageUserService from '@/services/manageUser.service'
import OrganizationService from '@/services/organization.service'
export default function tableFactory(...config) {
  return {
    data() {
      const [tLimit] = config
      return {
        tCurrentRows: [],
        tSearchWord: '',
        tPagination: 0,
        tLimit
      }
    },
    methods: {
      searchUsers: debounce(function () {
        ManageUserService.getUsersByName({'name': this.tSearchWord})
          .then((res) => {
            this.tCurrentRows = res
          })
          .catch(() => {
            this.$Message.error('获取用户列表失败！')
          })
      }, 1000),
      searchOrg: debounce(function () {
        OrganizationService.getOrganizationsByName({'fullName': this.tSearchWord})
          .then((res) => {
            this.tCurrentRows = res
          })
          .catch(() => {
            this.$Message.error('获取组织列表失败！')
          })
      }, 1000),
      changePage(index) {
        console.log(index)
      }
    }
  }
}
