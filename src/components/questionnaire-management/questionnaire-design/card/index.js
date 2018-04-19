/**
 * Created by hj on 2018/4/11.
 */

export default {
  props: {
    record: { type: Object, required: true },
    index: { type: Number, required: true }
  },
  data() {
    return {
      model: {
        formRadio: false,
        formCheckBox: false,
        formSort: false,
        formMatrix: false,
        formOpen: false,
        formNote: false
      },
      modal_title: {
        formRadio: '单选题',
        formCheckBox: '多选题',
        formSort: '排序题',
        formMatrix: '矩阵题',
        formOpen: '开放题',
        formNote: '备注'
      }
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
