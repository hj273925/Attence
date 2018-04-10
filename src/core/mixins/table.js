/**
 * Created by hj on 2018/4/10.
 */
import { debounce } from 'lodash'

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
      search: debounce(function () {
        console.log(this.tSearchWord)
      }, 1000),
      changePage(index) {
        console.log(index)
      }
    }
  }
}
