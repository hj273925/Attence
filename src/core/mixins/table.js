/**
 * Created by hj on 2018/4/10.
 */
export default function tableFactory(...config) {
  return {
    data() {
      const [tLimit] = config
      return {
        tCurrentRows: [],
        rows: [],
        current: 1,
        tSearchWord: '',
        total: 0,
        tableLoading: false,
        tLimit
      }
    },
    methods: {
    }
  }
}
