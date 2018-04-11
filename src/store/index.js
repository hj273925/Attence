import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

const state = {
  menus: {
  },
  groupNameList: [
    {
      value: '集团',
      label: 'New York'
    },
    {
      value: '上汽大众',
      label: 'London'
    },
    {
      value: '上汽大通',
      label: 'Sydney'
    }
  ],
  researchNameList: [
    {
      value: '2015调研',
      label: 'New York'
    },
    {
      value: '2016调研',
      label: 'London'
    },
    {
      value: '2017调研',
      label: 'Sydney'
    }
  ],
  titleList: [
    {
      value: 'W1',
      label: 'New York'
    },
    {
      value: 'W2',
      label: 'London'
    },
    {
      value: 'W3',
      label: 'Sydney'
    }
  ]
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
