import React from 'react'
import { Field, reduxForm } from 'redux-form'
import DataUpdateTable from './DataUpdateTable';
import DataNoUpdateTable from './DataNoUpdateTable';

const UpdateForm = props => {
  const { handleSubmit, pristine, reset, submitting, data } = props
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

export default reduxForm({
  form: 'UpdateForm',
  enableReinitialize: true
})(UpdateForm)
