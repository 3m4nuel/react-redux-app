import React from 'react'
import { reduxForm, formValueSelector } from 'redux-form'
import asyncValidate from './validation/asyncValidate'
import SearchOptions from './SearchOptions';
import UnderwriterList from './UnderwriterList';
import ProducerCodeField from './ProducerCodeField';
import EffectiveDateField from './EffectiveDateField';
import { connect } from 'react-redux'

const validate = values => {
  const errors = {}
  const requiredFields = [ 'producercodeold', 'underwriterold', 'underwriternew', 'producercodenew' ]

  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })

  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if(values.producercodeold !== '000000') {
    errors.producercodeold = 'Invalid producer code'
  }

  if(values.producercodenew !== '000000') {
    errors.producercodenew = 'Invalid producer code'
  }

  return errors
}

const SearchForm = props => {
  const { handleSubmit, pristine, reset, submitting, searchoption} = props
  return (
    <form onSubmit={handleSubmit}>
      <SearchOptions/>
      {(searchoption === 'underwriter') ? <UnderwriterList uwFieldName="underwriterold" label="Old Value"/> : ''}
      {(searchoption === 'producerCode') ? <ProducerCodeField producerCodeFieldName="producercodeold" label="Old Value"/> : ''}
      {(searchoption) ? <EffectiveDateField/> : ''}
      {(searchoption === 'underwriter') ? <UnderwriterList uwFieldName="underwriternew" label="New Value"/> : ''}
      {(searchoption === 'producerCode') ? <ProducerCodeField producerCodeFieldName="producercodenew" label="New Value"/> : ''}

      <br/>
      <div>
        <button type="submit" disabled={pristine || submitting}>Search</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values
        </button>
      </div>
    </form>
  )
}

const selector = formValueSelector('SearchForm')

SearchForm = reduxForm({
  form: 'SearchForm',
  validate,
  asyncValidate
})(SearchForm)

SearchForm = connect(
              state => ({ searchoption: selector(state, 'searchoption')})
              )(SearchForm)

export default SearchForm
