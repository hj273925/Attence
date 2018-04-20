/**
 * Created by hj on 2018/3/30.
 */
import DictionaryService from '@/services/dictionary.service'
import table from '@/core/mixins/table'
import { debounce } from 'lodash'

export default {
  name: 'DictionaryService',
  extends: table(10),
  data() {
    return {
      columns: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '组名',
          key: 'groupName',
          render: (h, params) => {
            return h('a', {
              style: {
                color: 'blue'
              },
              on: {
                click: () => {
                  this.clickRow(params.row)
                }
              }
            }, params.row.groupName)
          }
        },
        {
          title: '组id',
          key: 'groupId'
        },
        {
          title: '变量key',
          key: 'key'
        },
        {
          title: '变量描述',
          key: 'label'
        },
        {
          title: '变量值',
          key: 'value'
        },
        {
          title: '状态',
          key: 'enable',
          render(h, params) {
            let cor = String(params.row.enable) === 'true' ? 'blue' : 'red'
            let enable = String(params.row.enable) === 'true' ? '启用' : '禁用'
            return h('Tag', {
              props: {
                color: cor
              }
            }, enable)
          }
        }
      ],
      formCustom: {
        groupName: '',
        groupId: '',
        key: '',
        label: '',
        value: '',
        enable: ''
      },
      ruleCustom: {
        groupName: [
          { required: true, message: '请输入组名', trigger: 'blur' }
        ],
        groupId: [
          { required: true, message: '请输入组id', trigger: 'blur' }
        ],
        key: [
          { required: true, message: '请输入变量', trigger: 'blur' }
        ],
        label: [
          { required: true, message: '请输入变量描述', trigger: 'blur' }
        ],
        value: [
          { required: true, message: '请输入变量值', trigger: 'blur' }
        ],
        enable: [
          { required: true, message: '请选择状态', trigger: 'blur' }
        ]
      },
      selected: [],
      loading: true,
      modal_loading: false,
      modal: false,
      modal_title: '增加数据字典',
      record: {}
    }
  },
  created() {
    this.loadDictList()
  },
  methods: {
    // 加载数据
    loadDictList() {
      this.tableLoading = true
      const { tSearchWord, tLimit, current } = this
      DictionaryService.getDict(tSearchWord, tLimit, current)
        .then((res) => {
          this.rows = res.items
          this.total = res.totalNumber
        })
        .catch(() => {
          this.$Message.error('获取数据字典列表失败！')
        })
        .finally(() => {
          this.tableLoading = false
        })
    },
    // 搜索数据
    searchDict: debounce(function () {
      this.current = 1
      this.loadDictList()
    }, 1000),
    // 多选触发事件
    selectChange(selection) {
      this.selected = selection
    },
    showModal() {
      this.modal_title = '增加数据字典'
      this.formCustom = {}
      this.modal = true
    },
    // 单击表格
    clickRow(data) {
      this.modal_title = '编辑数据字典'
      data.enable = String(data.enable)
      this.formCustom = data
      this.modal = true
    },
    // 增加数据字典
    addDict() {
      DictionaryService.addDict(this.formCustom)
        .then(() => {
          this.modal = false
          this.loadDictList()
        })
        .catch((error) => {
          if (error.response.status === 409) {
            this.$Message.error('数据字典已存在！')
          } else {
            this.$Message.error('增加数据字典失败！')
          }
        })
        .finally(() => {
          this.modal_loading = false
        })
    },
    // 编辑数据字典
    editDict() {
      DictionaryService.editDict(this.formCustom)
        .then(() => {
          this.modal = false
          this.loadDictList()
        })
        .catch((error) => {
          if (error.response.status === 409) {
            this.$Message.error('数据字典已存在！')
          } else {
            this.$Message.error('数据字典编辑失败！')
          }
        })
        .finally(() => {
          this.modal_loading = false
        })
    },
    //  单击确定触发
    handleConfirm(name) {
      const self = this
      this.$refs[name].validate((valid) => {
        if (valid) {
          self.modal_loading = true
          if (self.modal_title === '增加数据字典') {
            self.addDict()
          } else {
            self.editDict()
          }
        }
      })
    },
    // 单击取消触发
    handleCancel(name) {
      this.modal = false
    },
    // 删除数据字典
    deleteDict() {
      let selections = []
      this.selected.forEach((value) => {
        selections.push(value.id)
      })
      DictionaryService.deleteDict(selections)
        .then(() => {
          this.$Message.success('数据字典已删除！')
          this.selected = []
          this.loadDictList()
        })
        .catch(() => {
          this.$Message.error('删除数据字典失败！')
        })
    },
    // 分页
    changePage(index) {
      this.current = index
      this.loadDictList()
    }
  }
}
