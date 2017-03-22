import React from 'react'
import { Field, reduxForm } from 'redux-form'
import asyncValidate from './validation/asyncValidate'
import SearchOptions from './SearchOptions';
import UnderwriterList from './UnderwriterList';
import ProducerCodeField from './ProducerCodeField';
import EffectiveDateField from './EffectiveDateField';

const validate = values => {
  const errors = {}
  const requiredFields = [ 'producercodeold', 'underwriternew', 'producercodenew' ]

  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })

  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if(values.producercodeold != '000000') {
    errors.producercodeold = 'Invalid producer code'
  }

  if(values.producercodenew != '000000') {
    errors.producercodenew = 'Invalid producer code'
  }

  return errors
}

const displayOptions = values => {
  let showSearchOptions = false;
  if(values.searchoption === 'underwriter') {
    showSearchOptions = true;
  }

return showSearchOptions
}

const SearchForm = props => {
  const { handleSubmit, pristine, reset, submitting, showSearchOptions} = props
  return (
    <form onSubmit={handleSubmit}>
      <SearchOptions/>
      <UnderwriterList uwFieldName="underwriterold" label="Old Value"/>
      <ProducerCodeField producerCodeFieldName="producercodeold" label="Old Value"/>
      <EffectiveDateField/>
      <UnderwriterList uwFieldName="underwriternew" label="New Value"/>
      <ProducerCodeField producerCodeFieldName="producercodenew" label="New Value"/>
      <br/>
      <div>
        <button type="submit" disabled={pristine || submitting}>Search</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'SearchForm',
  displayOptions,
  validate,
  asyncValidate
})(SearchForm)
