/*import React from 'react';
import Field from 'redux-form';
import DatePicker from 'material-ui/DatePicker';


const renderDatePicker = ({ input, ...rest }) => (
  <DatePicker
    {...input} {...rest}
    dateFormat="DD/MM/YYYY"
    onChange={(event, value) => input.onChange(value)}
    selected={input.value} />
)

const EffectiveDateField = () => (
  <div>
    <Field
      name="effectiveDate"
      hintText="Effective Date"
      label="Effective Date"
      component={renderDatePicker}
      format={v => (v === '' || v === undefined ? new Date() : new Date(v))}/>
  </div>
)

export default EffectiveDateField
*/


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

 /* <DatePicker
    dateFormat="DD/MM/YYYY"
    onChange={(event, value) => input.onChange(value)}
    selected={input.value} />*/
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












/*
import React from 'react';
import DatePicker from 'react-datepicker';
import Moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

// Action
const setEffectiveDate = (id, date) => ({
  type: "SET_EFFDT_SEARCH",
  id: {id},
  effectiveDt: {date}
})

let defaultEff = Moment()

const EffectiveDateField = ({ id, effectiveDate }) => (
  <DatePicker
    id={id}
    name="effectiveDate"
    selected={effectiveDate ? effectiveDate : defaultEff}
    onChange={setEffectiveDate(id)}/>
)

export default EffectiveDateField
*/
