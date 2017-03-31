import React from 'react'
import { Field } from 'redux-form'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import Store from '../main/Store'
import { loadNoUpdateData, loadUpdateData, setIsDeselect, setIsNotSubmittable } from '../actions/data';


const renderRadioGroup = ({ input, ...rest }) => (
  <RadioButtonGroup {...input} {...rest}
    valueSelected={input.value}
    onChange={(event, value) => {
      input.onChange(value)
      Store.dispatch(setIsDeselect(true))
      Store.dispatch(setIsNotSubmittable(true))
      Store.dispatch(loadNoUpdateData([]))
      Store.dispatch(loadUpdateData([]))
    }}/>
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
