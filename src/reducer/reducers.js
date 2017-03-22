import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as fetchReducer} from 'react-redux-fetch';

const searchresults = (state = [], action) => {
  switch (action.type) {
    case 'SET_SEARCH_DATA':
      return action.searchdata
    default:
      return state
  }
}

const reducers = combineReducers({
  form: formReducer,
  repository: fetchReducer,
  searchresults
})

export default reducers
