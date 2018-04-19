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
      redirect: '/console/research-information',
      component: function (resolve) {
        require(['@/components/user/console-user/index.vue'], resolve)
      },
      children: [
        {
          path: '/console/fill-progress',
          name: 'FillProgress',
          component: function (resolve) {
            require(['@/components/console/fill-progress/index.vue'], resolve)
          }
        }, {
          path: '/console/data-upload',
          name: 'DataUpload',
          component: function (resolve) {
            require(['@/components/console/data-upload/index.vue'], resolve)
          }
        }, {
          path: '/console/questionnaire-distribution',
          name: 'QuestionnaireDistribution',
          component: function (resolve) {
            require(['@/components/console/questionnaire-distribution/index.vue'], resolve)
          }
        }, {
          path: '/console/research-information',
          name: 'ResearchInformation',
          component: function (resolve) {
            require(['@/components/console/research-information/index.vue'], resolve)
          }
        }, {
          path: '/console/sample-selection',
          name: 'SampleSelection',
          component: function (resolve) {
            require(['@/components/console/sample-selection/index.vue'], resolve)
          }
        }
      ]
    }, {
      path: '/manage',
      name: 'Manage',
      redirect: '/manage-organization',
      component: function (resolve) {
        require(['@/components/user/manage-user/index.vue'], resolve)
      },
      children: [
        {
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
        }, {
          path: '/manage-questionnaire',
          name: 'ManageQuestionnaire',
          component: function (resolve) {
            require(['@/components/questionnaire-management/manage-questionnaire/index.vue'], resolve)
          }
        }
      ]
    }]
})

