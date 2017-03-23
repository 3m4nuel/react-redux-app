import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as fetchReducer} from 'react-redux-fetch'
import { APP_DATA } from '../actions/data'

const dataReducer = (state = [], action) => {
  switch (action.type) {
    case APP_DATA:
      return action.data
    default:
      return state
  }
}

const reducers = combineReducers({
  form: formReducer,
  repository: fetchReducer,
  dataReducer
})

export default reducers
