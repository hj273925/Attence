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
        rows: [],
        current: 1,
        tSearchWord: '',
        tPagination: 0,
        tableLoading: false,
        tLimit
      }
    },
    methods: {
      search: debounce(function () {
        console.log(this.tSearchWord)
      }, 1000),
      changePage(index) {
        const { tLimit } = this
        this.tCurrentRows = this.rows.slice((index - 1) * tLimit, index * tLimit)
      }
    }
  }
}
