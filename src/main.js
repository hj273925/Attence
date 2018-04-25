// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Cookies from 'js-cookie'
import store from './store/index'
import './core/mixins/mixin'
import util from './components/tool/util'
import axios from 'axios'
import './assets/css/table.css'

import iView from 'iview'
import 'iview/dist/styles/iview.css'
import Vuerify from 'vuerify'

Vue.config.productionTip = false
Vue.use(iView)
Vue.use(Vuerify)
Vue.use(util)

Vue.prototype.$axios = axios.create({
  timeout: 10000,
  withCredentials: true
})

//设置参数到vue.ext_ctx
const queryString = require('query-string')
Vue.prototype.ext_ctx = queryString.parse(location.search)
for (var key in Vue.prototype.ext_ctx) {
  console.log("param from c01 --->  " + key + '=' + Vue.prototype.ext_ctx[key])
  Cookies.set(key, Vue.prototype.ext_ctx[key])
}

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  },
  created: function() {}
})
