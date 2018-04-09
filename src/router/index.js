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
      component: function (resolve) {
        require(['@/components/basic-information/manage-user/index.vue'], resolve)
      }
    }, {
      path: '/data-dictionary',
      name: 'DataDictionary',
      component: function (resolve) {
        require(['@/components/basic-information/data-dictionary/index.vue'], resolve)
      }
    }, {
      path: '/survey-management',
      name: 'SurveyManagement',
      component: function (resolve) {
        require(['@/components/survey-management/research-management/index.vue'], resolve)
      }
    }, {
      path: '/survey-intercalate',
      name: 'SurveyIntercalate',
      component: function (resolve) {
        require(['@/components/survey-management/research-intercalate/index.vue'], resolve)
      }
    }, {
      path: '/sample-composition',
      name: 'SampleComposition',
      component: function (resolve) {
        require(['@/components/data-analysis/sample-composition/index.vue'], resolve)
      }
    }, {
      path: '/satisfaction-comparison',
      name: 'SatisfactionComparison',
      component: function (resolve) {
        require(['@/components/data-analysis/satisfaction-comparison/index.vue'], resolve)
      }
    }, {
      path: '/satisfaction-distribution',
      name: 'SatisfactionDistribution',
      component: function (resolve) {
        require(['@/components/data-analysis/satisfaction-distribution/index.vue'], resolve)
      }
    }, {
      path: '/index-comparison',
      name: 'IndexComparison',
      component: function (resolve) {
        require(['@/components/data-analysis/index-comparison/index.vue'], resolve)
      }
    }, {
      path: '/index-distribution',
      name: 'IndexDistribution',
      component: function (resolve) {
        require(['@/components/data-analysis/index-distribution/index.vue'], resolve)
      }
    }, {
      path: '/problem-distribution',
      name: 'ProblemDistribution',
      component: function (resolve) {
        require(['@/components/data-analysis/problem-distribution/index.vue'], resolve)
      }
    }, {
      path: '/questionnaire-design',
      name: 'QuestionnaireDesign',
      component: function (resolve) {
        require(['@/components/questionnaire-management/questionnaire-design/index.vue'], resolve)
      }
    }]
})

