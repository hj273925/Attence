/**
 * created by kevin.
 */

import api from './api.service'
import qs from 'qs'

class AnalysisService {
  constructor() {
    this.api = api
  }

  getSurveyList() {
    return this.api.get('/analysis/surveyList')
  }

  getSurveyOrgList(surveyId) {
    return this.api.get('/analysis/surveyOrgList', {'surveyId': surveyId})
  }

  getSurveyQuestionList(surveyId) {
    return this.api.get('/analysis/surveyQuestionList', {'surveyId': surveyId})
  }

}

export default new AnalysisService()
