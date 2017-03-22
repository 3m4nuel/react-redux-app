import React from 'react'
import { Field } from 'redux-form'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'


const renderRadioGroup = ({ input, ...rest }) => (
  <RadioButtonGroup {...input} {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}/>
)

const SearchOptions = () => (
  <div>
    <Field name="searchoption" component={renderRadioGroup}>
      <RadioButton value="underwriter" label="Underwriter"/>
      <RadioButton value="producerCode" label="Producer Code"/>
    </Field>
  </div>
)

export default SearchOptions
