import axios from 'axios'
// 處理action常數
export const SAVE_LOGIN_INFO = 'SAVE_LOGIN_INFO'
export const CLEAR_LOGIN_INFO = 'CLEAR_LOGIN_INFO'

// Auth Actions
export const saveLoginInfo = (obj) => {
  return {
    type: SAVE_LOGIN_INFO,
    payload: {
      accessToken: obj.accessToken,
      loginType: obj.loginType,
      tenantId: obj.tenantId,
      userName: obj.userName,
      account: obj.account,
      isAuthenticated: obj.isAuthenticated,
      profilePhoto:obj.profilePhoto,
      userType: obj.userType
    }
  }
}

export const clearLoginInfo = () => {
  return {
    type: CLEAR_LOGIN_INFO,
    payload: {}
  }
}

// Auth Init State Value
const LoginInfoInit = {
  isAuthenticated: false,
  accessToken: '',
  loginType: '',
  tenantId: '',
  userName: '',
  account: '',
  profilePhoto: '',
  userType: 0
}
// Auth Reducer
function LoginInfo(state = LoginInfoInit, action) {
  switch (action.type) {
  case SAVE_LOGIN_INFO:
    // Api header Authorization setting
    axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.accessToken}`;
    return { ...state,
      accessToken: action.payload.accessToken,
      loginType: action.payload.loginType,
      tenantId: action.payload.tenantId,
      userName: action.payload.userName,
      account: action.payload.account,
      isAuthenticated: action.payload.isAuthenticated,
      profilePhoto: action.payload.profilePhoto,
      userType: action.payload.userType
    }
  case CLEAR_LOGIN_INFO:
    return {...state, 
      accessToken: '',
      loginType: '',
      tenantId: '',
      userName: '',
      account: '',
      isAuthenticated: false,
      profilePhoto: '',
      userType: 0
    }
  default:
    return state
  }
}
export default LoginInfo