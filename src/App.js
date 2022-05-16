/* eslint-disable */
import React, { useEffect } from 'react'
import RouterSetting from 'Router'

import { Provider } from 'react-redux'
import store, { history } from './redux/store'
import { ConnectedRouter } from 'connected-react-router'

import 'antd/dist/antd.css'

import './i18n/i18n'
import { useTranslation } from 'react-i18next';

const App = () => {

const { i18n} = useTranslation()

useEffect(()=>{
  if(sessionStorage.getItem('lang') === null){
    sessionStorage.setItem('lang','tw')
  } else {
    i18n.changeLanguage(sessionStorage.getItem('lang'))
  }
}, [])

return(
<>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <RouterSetting {...store}/>
    </ConnectedRouter>
  </Provider>
</>
)
}
export default App
