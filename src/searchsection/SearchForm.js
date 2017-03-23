import React from 'react'
import { reduxForm, formValueSelector } from 'redux-form'
import asyncValidate from './validation/asyncValidate'
import SearchOptions from './SearchOptions';
import UnderwriterList from './UnderwriterList';
import ProducerCodeField from './ProducerCodeField';
import EffectiveDateField from './EffectiveDateField';
import { connect } from 'react-redux'

function validateProducerCode(producerCode) {
  return fetch('http://localhost:7001/services/ProducerService/Validate/' + producerCode)
            .then( response => response.json() )
            .then( ({result: isValid}) => isValid )
}

const validate = values => {
  const errors = {}
  const requiredFields = [ 'producercodeold', 'underwriterold', 'effectiveDate', 'underwriternew', 'producercodenew' ]

  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })

  return errors
}

let SearchForm = props => {
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
