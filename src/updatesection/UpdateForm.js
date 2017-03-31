import React from 'react'
import { reduxForm } from 'redux-form'
import DataUpdateTable from './DataUpdateTable'
import DataNoUpdateTable from './DataNoUpdateTable'
import FetchLoader from '../common/FetchLoader'
import { connect } from 'react-redux'

let UpdateForm = props => {
  const { handleSubmit, submitting, isDeselect, isNotSubmittable, isUpdateOccured, noUpdateData, updateData } = props
  return (
    <form onSubmit={handleSubmit}>
      <DataNoUpdateTable data={noUpdateData}/>
      <FetchLoader/>
      <DataUpdateTable isUpdateOccured={isUpdateOccured} isDeselect={isDeselect} data={updateData}/>
      <br/>
      <div>
        <button type="submit" disabled={submitting || isNotSubmittable || isUpdateOccured}>Submit</button>
      </div>
    </form>
  )
}

const mapStateToProps = (state, ownProps) => ({
  noUpdateData: state.noUpdateTableReducer,
  updateData: state.updateTableReducer,
  isDeselect: state.dataDeselectOnClickawayReducer,
  isNotSubmittable: state.dataUpdateNotSubmittableReducer,
  isUpdateOccured: state.dataUpdateOccuredReducer,
})

UpdateForm = reduxForm({
  form: 'UpdateForm'
})(UpdateForm)

UpdateForm = connect(mapStateToProps)(UpdateForm)

export default UpdateForm
