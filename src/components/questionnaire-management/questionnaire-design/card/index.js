/**
 * Created by hj on 2018/4/11.
 */

export default {
  props: {
    record: { type: Object, required: true },
    index: { type: Number, required: true }
  },
  methods: {
    // 上移
    shifUp() {
      console.log(this.index)
    },
    // 下移
    shifDown() {
      console.log(this.index)
    },
    // 编辑
    editTitle() {
      console.log(this.index)
    },
    // 删除
    deleteTitle() {
      console.log(this.index)
    }
  }
}
