/**
 * Created by hj on 2018/4/11.
 */

export default {
  props: {
    record: { type: Object, required: true },
    index: { type: Number, required: true }
  },
  methods: {
    // 切换位置
    switchingPosition(action) {
      this.$emit('switchingPosition', action, this.index)
    },
    // 编辑
    editTitle() {
      console.log(this.index)
    },
    // 删除
    deleteTitle() {
      this.$emit('deleteTitle', this.index)
    }
  }
}
