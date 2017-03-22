import React from 'react'
import { Field } from 'redux-form'
import TextField from 'material-ui/TextField'

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

const ProducerCodeField = ({ producerCodeFieldName, label }) => (
  <div>
    <Field name={producerCodeFieldName} component={renderTextField} label={label}/>
  </div>
)

export default ProducerCodeField
