import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'App',
    component: function (resolve) {
      require(['@/components/basic-information/manage-organization/index.vue'], resolve)
      }
    }, {
      path: '/manage-organization',
      name: 'Manage0rganization',
      component: function (resolve) {
        require(['@/components/basic-information/manage-organization/index.vue'], resolve)
      }
    }, {
      path: '/manage-user',
      name: 'ManageUser',
      component: function( resolve ) {
        require(['@/components/basic-information/manage-user/index.vue'], resolve)
      }
    }, {
      path: '/data-dictionary',
      name: 'DataDictionary',
      component: function( resolve ) {
        require(['@/components/basic-information/data-dictionary/index.vue'], resolve)
      }
    }]
})
