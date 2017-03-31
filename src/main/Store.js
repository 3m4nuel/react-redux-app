import { createStore, applyMiddleware } from 'redux'
import {middleware as fetchMiddleware} from 'react-redux-fetch'
import reducers from '../reducer/reducers'
import thunk from 'redux-thunk';


const Store = createStore(reducers, applyMiddleware(fetchMiddleware, thunk))

export default Store
