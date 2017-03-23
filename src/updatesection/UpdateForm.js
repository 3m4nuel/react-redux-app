import React from 'react'
import { reduxForm } from 'redux-form'
import DataUpdateTable from './DataUpdateTable';
import DataNoUpdateTable from './DataNoUpdateTable';
import { connect } from 'react-redux'

let UpdateForm = props => {
  const { handleSubmit, submitting, data } = props

  return (
    <form onSubmit={handleSubmit}>
      <DataNoUpdateTable data={data}/>
      <DataUpdateTable data={data}/>
      <br/>
      <div>
        <button type="submit" disabled={submitting}>Submit</button>
      </div>
    </form>
  )
}

const mapStateToProps = (state, ownProps) => ({data: state.dataReducer})

UpdateForm = reduxForm({
  form: 'UpdateForm'
})(UpdateForm)

UpdateForm = connect(mapStateToProps)(UpdateForm)

export default UpdateForm
