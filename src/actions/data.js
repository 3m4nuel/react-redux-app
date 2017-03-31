
export const NOUPDATE_TABLE = 'NOUPDATE_TABLE'

export const loadNoUpdateData = data => ({ type: NOUPDATE_TABLE, data: data })

export const UPDATE_TABLE = 'UPDATE_TABLE'

export const loadUpdateData = data => ({ type: UPDATE_TABLE, data: data })

export const IS_DESELECT = 'IS_DESELECT'

export const setIsDeselect = isDeselect => ({ type: IS_DESELECT, isDeselect: isDeselect })

export const NOT_SUBMITTABLE = 'NOT_SUBMITTABLE'

export const setIsNotSubmittable = isNotSubmittable => ({ type: NOT_SUBMITTABLE, isNotSubmittable: isNotSubmittable })

export const UPDATE_DATA = 'UPDATE_DATA'

export const setUpdateData = data => ({ type: UPDATE_DATA, selected: data })

export const UPDATE_OCCURED = 'UPDATE_OCCURED'

export const setUpdateOccured = isUpdateOccured => ({ type: UPDATE_OCCURED, isUpdateOccured: isUpdateOccured })

export const SEARCH_INFO = 'SEARCH_INFO'

export const setSearchInfo = data => ({ type: SEARCH_INFO, search: data })

export const LOADING = 'LOADING'

export const setLoading = isLoad => ({ type: LOADING, isLoad: isLoad })

export const UPDATE_UI = 'UPDATE_UI'

export const updateUiWithResponse = response => ({ type: UPDATE_UI, response: response })
