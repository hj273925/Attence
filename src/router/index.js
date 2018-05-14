import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'App',
    component: function (resolve) {
      require(['@/components/user/login/index.vue'], resolve)
      }
    }, {
      path: '/console',
      name: 'Console',
      redirect: '/console/overview',
      component: function (resolve) {
        require(['@/components/user/console-user/index.vue'], resolve)
      },
      children: [
        {
          path: '/console/overview',
          name: 'Overview',
          component: function (resolve) {
            require(['@/components/console/overview/index.vue'], resolve)
          }
        }, {
          path: '/console/company',
          name: 'Company',
          component: function (resolve) {
            require(['@/components/console/company/index.vue'], resolve)
          }
        }, {
          path: '/console/project',
          name: 'Project',
          component: function (resolve) {
            require(['@/components/console/project/index.vue'], resolve)
          }
        }, {
          path: '/console/staff',
          name: 'Staff',
          component: function (resolve) {
            require(['@/components/console/staff/index.vue'], resolve)
          }
        }
      ]
     }
    ]
})

