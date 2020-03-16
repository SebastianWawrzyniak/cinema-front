import { applyMiddleware, createStore } from 'redux'

import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import reducer from './reducers'

export default createStore(reducer, applyMiddleware(thunkMiddleware, createLogger()))