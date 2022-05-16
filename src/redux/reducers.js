/* eslint-disable no-unused-vars */
import { combineReducers } from 'redux'
import { CHANGE_THEME, CHANGE_LANG} from './constant'
import LoginInfo from './auth'
import storeData from './storage'
import { connectRouter } from 'connected-react-router'
import Users from './users'
import apiReducers from './apiReducers'

const GlobalSettingState = {
	theme: 'dark',
  lang: 'en'
}

function GlobalSetting(state = GlobalSettingState, action) {
  switch (action.type) {
  case CHANGE_THEME:
    return { ...state, theme: action.payload.theme }
  case CHANGE_LANG:
    return { ...state, lang: action.payload.lang }
  default:
    return state
  }
}

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  GlobalSetting,
  LoginInfo,
  Users,
  storeData,
  apiReducers
})

export default rootReducer
