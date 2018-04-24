/**
 * Created by hj on 2018/4/11.
 */

export default {
  props: {
    record: { type: Object, required: true },
    index: { type: Number, required: true },
    length: { type: Number, required: true }
  },
  data() {
    return {
      type: ''
    }
  },
  methods: {
    // 切换位置
    switchingPosition(action) {
      this.$emit('switchingPosition', action, this.index)
    },
    // 编辑
    editTitle() {
      this.$emit('editTitle', this.index)
    },
    // 删除
    deleteTitle() {
      this.$emit('deleteTitle', this.index)
    }
  }
}
