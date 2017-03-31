import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as fetchReducer} from 'react-redux-fetch'
import { NOUPDATE_TABLE, UPDATE_TABLE, IS_DESELECT, NOT_SUBMITTABLE, UPDATE_OCCURED, LOADING, SEARCH_INFO, UPDATE_DATA } from '../actions/data'

const noUpdateTableReducer = (state = [], action) => {
  switch (action.type) {
    case NOUPDATE_TABLE:
      return action.data
    default:
      return state
  }
}

const updateTableReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_TABLE:
      return action.data
    default:
      return state
  }
}

const dataDeselectOnClickawayReducer = (state = true, action) => {
  switch (action.type) {
    case IS_DESELECT:
      return action.isDeselect
    default:
      return state
  }
}

const dataUpdateNotSubmittableReducer = (state = true, action) => {
  switch (action.type) {
    case NOT_SUBMITTABLE:
      return action.isNotSubmittable
    default:
      return state
  }
}

const dataUpdateOccuredReducer = (state = false, action) => {
  switch (action.type) {
    case UPDATE_OCCURED:
      return action.isUpdateOccured
    default:
      return state
  }
}

const fetchLoadReducer = (state = false, action) => {
  switch (action.type) {
    case LOADING:
      return action.isLoad
    default:
      return state
  }
}

const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_INFO:
      return action.search
    default:
      return state
  }
}

const selectedDataReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_DATA:
      return action.selected
    default:
      return state
  }
}

const reducers = combineReducers({
  form: formReducer,
  repository: fetchReducer,
  noUpdateTableReducer,
  updateTableReducer,
  dataDeselectOnClickawayReducer,
  dataUpdateNotSubmittableReducer,
  dataUpdateOccuredReducer,
  searchReducer,
  selectedDataReducer,
  fetchLoadReducer,
})

export default reducers
