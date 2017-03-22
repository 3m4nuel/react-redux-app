import React from 'react'
import { Field } from 'redux-form'
import DatePicker from 'material-ui/DatePicker'


const renderDatePicker = ({ input, label, meta: { touched, error }, ...rest }) => (
  <DatePicker {...rest}
        DateTimeFormat={global.Intl.DateTimeFormat}
        errorText={touched && error}
        hintText="Effective Date"
        value={input.value !== ''? new Date(input.value) : null}
        onChange={(event, value) => input.onChange(value)}
        cancelLabel="Cancel"
        locale="en-US"
        autoOk={true}
        format={input.value}
        selected={input.value}
        />
)

const EffectiveDateField = () => (
  <div>
    <Field
      name="effectiveDate"
      component={renderDatePicker}
      />
  </div>
)

export default EffectiveDateField
