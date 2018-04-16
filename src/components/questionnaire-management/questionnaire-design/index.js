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
        items: [{
          nodeType: 'Q_SINGLE_CHOICE',
          idx: '',
          topic: 'asdasasd',
          content: '',
          items: [{
            type: 'SIMPLE',
            label: 'dasas',
            score: 0
          }]
        }, {
          nodeType: 'Q_MULTIPLE_CHOICE',
          idx: '',
          topic: '',
          content: '',
          items: []
        }]
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
    }
  }
}

