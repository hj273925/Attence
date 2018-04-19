/**
 * Created by hj on 2018/3/30.
 */
import tTable from './table/index.vue'
import tCard from './card/index.vue'
export default {
  components: {
    tTable,
    tCard
  },
  data() {
    return {
      data: {},
      statusList: ['新建', '完成'],
      record: {
        name: '',
        title: '',
        subTitle: '',
        status: 'ON',
        items: []
      },
      formCustom: {
        name: '',
        status: ''
      }
    }
  },
  methods: {
    addItems(value) {
      this.record.items.push(value)
    },
    // 删除题型
    deleteItem(index) {
      this.record.items.splice(index, 1)
    },
    // 编辑题型
    editItem(index) {
      console.log(this.record.items[index])
      this.data = this.record.items[index]
    },
    // 切换位置
    switchingPosition(action, index) {
      const list = this.record.items
      if (action === 'down') {
        list.splice(index, 2, list[index + 1], list[index])
      } else {
        list.splice(index - 1, 2, list[index], list[index - 1])
      }
    }
  }
}

