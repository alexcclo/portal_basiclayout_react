import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers'
import { createBrowserHistory } from 'history'
// import { routerMiddleware } from 'connected-react-router'z
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

export const history = createBrowserHistory()

const middleware = [thunk]

const store = createStore(
    rootReducer(history),
    composeWithDevTools(applyMiddleware(...middleware))
    )

export default store