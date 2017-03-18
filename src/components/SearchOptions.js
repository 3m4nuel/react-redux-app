import React, { PropTypes }  from 'react';
import DatePicker from 'react-datepicker';
import Moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

// Action
const setSearchOption = (option) => ({
  type: "SET_SEARCH_OPTION",
  option: {option}
})

const SearchOptions = ({ onClick, selection }) => (
  let uwSelected = false;
  let prodCdSelected = false;

  if(selection === 'producerCode') {
    uwSelected = true;
  } else if (selection === 'underwriter') {
    uwSelected = true;
  }

  <FormGroup controlId="underwriterProducercodeSelection">
    <Col componentClass={ControlLabel} sm={3}>
    Underwriter or Producer Code
    </Col>
    <Col sm={4}>
      <Radio name="searchSelection" selected={uwSelected} onClick={onClick} value="underwriter" inline>Underwriter</Radio>
      <Radio name="searchSelection" selected={uwSelected} onClick={onClick} value="producerCode" inline>Producer Code</Radio>
    </Col>
  </FormGroup>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  selection: PropTypes.string.isRequired
}

export default SearchOptions
