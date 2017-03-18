import React from 'react';
import DatePicker from 'react-datepicker';
import Moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class EffectiveDateField extends React.Component {
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
}

export default EffectiveDateField
