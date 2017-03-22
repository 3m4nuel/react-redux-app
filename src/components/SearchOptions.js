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
      <RadioButton value="producerCode" label="ProducerCode"/>
    </Field>
  </div>
)

export default SearchOptions

















/*import React from 'react';
import { connect } from 'react-redux'

import FormGroup from 'react-bootstrap/lib/FormGroup';
import Col from 'react-bootstrap/lib/Col';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Radio from 'react-bootstrap/lib/Radio';

let input;

// Action
const setSearchOption = () => ({
  type: "SET_SEARCH_OPTION",
  option: input.value
}, console.log(input.value))

const SearchOptions = ({ state }) => (
  <FormGroup controlId="uwprodsearchoptions">
    <Col componentClass={ControlLabel} sm={3}>
    Underwriter or Producer Code
    </Col>
    <Col sm={4}>
    <Radio inputRef={ref => {input = ref;}} name="producerCode" selected={state.option == 'producerCode'} onClick={setSearchOption} value="producerCode" inline>Producer Code</Radio>
      <Radio inputRef={ref => {input = ref;}} name="underwriter" selected={state.option == 'underwriter'} onClick={setSearchOption} value="underwriter" inline>Underwriter</Radio>

    </Col>
  </FormGroup>
)

const mapStateToProps = (state) => ({
  state: state
})

const mapDispatchToProps = {
  onSearchOptionClick: setSearchOption
}

SearchOptions = connect(
  mapStateToProps,
  mapDispatchToProps
  )(SearchOptions)

export default SearchOptions*/
