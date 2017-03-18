import React from 'react';
import DatePicker from 'react-datepicker';
import Moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

// Action
const setEffectiveDate = (id, date) => ({
  id: {id},
  type: "SET_SEARCH_VALUES",
  effectiveDt: {date}
})

const EffectiveDateField = ({ id, effectiveDate }) => (
  <DatePicker
    name="effectiveDate" + {id}
    selected={effectiveDate}
    onChange={setEffectiveDate(id)}/>
)

/*class EffectiveDateField extends React.Component {
  constructor(){
    super();
    this.state = {effectiveDate: Moment()}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date){
    this.setState({effectiveDate: date})
  }

  render(){
    return (
      <DatePicker
            name="effectiveDate"
            selected={this.state.effectiveDate}
            onChange={this.handleChange}/>
      )
  }
}*/

export default EffectiveDateField
