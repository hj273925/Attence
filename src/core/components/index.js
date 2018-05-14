import Vue from 'vue'
import { forEach } from 'lodash'

import Savater from './avater/index.vue'
import Schart from './chart/index.vue'

function $using(components) {
  const obj = {}
  forEach(components, (c, key) => {
    const name = (typeof c === 'function') ? key : c.name
    obj[name] = Vue.component(name, c)
  })
  return obj
}

export default $using({
  Savater,
  Schart
})
