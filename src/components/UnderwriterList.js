import React from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

const UnderwriterList = ({ onChange }) => (
  let underwriters;

  fetch( 'http://localhost:7001/services/UnderwriterService/UnderwriterList/')
      .then( response => response.json() )
      .then( json => { underwriters })

  <FormGroup
    controlId="formControlsSelect"
    onSelect={() => alert('selected!')}
    onChange={() => alert('changed!')}>
    <FormControl componentClass="select" placeholder="select">
      {underwriters.map((underwriter, i) =>
      <option key={i} value={underwriter.name}>{underwriter.fullname}</option>)}
    </FormControl>
  </FormGroup>
)

export default UnderwriterList

/*class UnderwriterDropDownList extends React.Component {
  constructor(){
    super();
    this.state = {value: '', underwriters: []}
  }

  handleChange(event){
    this.setState({value: event.target.value})
  }

  componentWillMount(){
    fetch( 'http://localhost:7001/services/UnderwriterService/UnderwriterList/')
      .then( response => response.json() )
      .then( json => { this.setState({underwriters: json}) })
  }

  render(){
    return (
        <FormGroup
          controlId="formControlsSelect"
          onSelect={() => alert('selected!')}
          onChange={() => alert('changed!')}>
            <FormControl componentClass="select" placeholder="select">
              {this.state.underwriters.map((underwriter, i) =>
              <option key={i} value={underwriter.name}>{underwriter.fullname}</option>)}
            </FormControl>
        </FormGroup>
      )
  }
}
*/

