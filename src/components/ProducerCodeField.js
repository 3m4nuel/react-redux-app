import React from 'react';

// Action
const setProducerCd = (id, date) => ({
  id: {id},
  type: "SET_SEARCH_VALUES",
  producerCd: {date}
})

const ProducerCodeField = ({ id, onChange, value }) => (
  <input
    type="text"
    name='producerCode' + {id}
    onChange={onChange(id)}
    value={value} />
    // Add error message field

)

/*class ProducerCodeInputField extends React.Component {
  constructor(){
    super();
    this.state = {producerCode: ''}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({producerCode: event.target.value})
  }

  render(){
    return (
      <input
            type="text"
            name="producerCode"
            onChange={this.handleChange}
            value={this.state.producerCode} />
      )
  }
}*/

export default ProducerCodeField
