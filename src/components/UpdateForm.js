import React from 'react'
import { Field, reduxForm } from 'redux-form'
import asyncValidate from './asyncValidate'
import SearchOptions from './SearchOptions';
import UnderwriterList from './UnderwriterList';
import ProducerCodeField from './ProducerCodeField';
import EffectiveDateField from './EffectiveDateField';
import DataUpdateTable from './DataUpdateTable';
import DataNoUpdateTable from './DataNoUpdateTable';

const UpdateForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <DataNoUpdateTable tableTitle="Application Affected" isShowCheckBox="true" />
      <DataUpdateTable/>
      <div>
        <button type="submit" disabled={submitting}>Submit</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'UpdateForm'  // a unique identifier for this form
})(UpdateForm)
