import React from 'react';

class ProducerCodeInputField extends React.Component {
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
}

export default ProducerCodeInputField
