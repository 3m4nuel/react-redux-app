import React from 'react'
import { Field, reduxForm } from 'redux-form'
import asyncValidate from './asyncValidate'
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

  if(values.searchoption === 'underwriter') {
    if(!values.underwriterold) {
      errors.underwriterold = 'Required yo'
    }
  }

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

const SearchForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <SearchOptions/>
      <UnderwriterList uwFieldName="underwriterold"/>
      <ProducerCodeField producerCodeFieldName="producercodeold"/>
      <EffectiveDateField/>
      <UnderwriterList uwFieldName="underwriternew"/>
      <ProducerCodeField producerCodeFieldName="producercodenew"/>
      <div>
        <button type="submit" disabled={pristine || submitting}>Search</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'SearchForm',  // a unique identifier for this form
  validate,
  asyncValidate
})(SearchForm)


/*import React from 'react'
import { Field, reduxForm } from 'redux-form'
import 'react-widgets/dist/css/react-widgets.css'

import SearchOptions from './SearchOptions';

let SearchForm = props => {
  const { handleSubmit, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <SearchOptions/>
      <div>
        <button type="submit" >Submit</button>
        <button type="button" onClick={reset}>Reset Values
        </button>
      </div>
    </form>
  )
}

SearchForm = reduxForm({
  form: 'searchform'  // a unique identifier for this form
})(SearchForm)

export default SearchForm
*/
