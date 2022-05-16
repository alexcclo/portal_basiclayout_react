import { CHANGE_LANG, CHANGE_THEME } from "redux/constant"

// 更換主題顏色
export const changeTheme = (obj) => {
  return {
    type: CHANGE_THEME,
    payload: {
      theme: obj.theme
    }
  }
}

// 修改語言
export const changeLang = (obj) => {
  return {
    type: CHANGE_LANG,
    payload: {
      lang: obj.lang
    }
  }
}

