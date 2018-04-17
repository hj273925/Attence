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
      data: [],
      modal: false,
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
    // 切换位置
    switchingPosition(action, index) {
      const list = this.record.items
      console.log(list[index])
      if (action === 'down') {
        list[index] = list[index + 1]
      } else {
        list[index] = list[index - 1]
      }
    }
  }
}

