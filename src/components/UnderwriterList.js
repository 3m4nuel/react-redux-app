import React, {PropTypes} from 'react'
import connect from 'react-redux-fetch';
import { Field } from 'redux-form'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

const renderSelectField = ({ input, label, option, meta: { touched, error }, children, ...custom }) => (
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom}/>
)

class UnderwriterList extends React.Component {
  static propTypes = {
        dispatchAllUnderwritersGet: PropTypes.func.isRequired,
        allUnderwritersFetch: PropTypes.object
    };

  componentWillMount(){
    this.props.dispatchAllUnderwritersGet();
  }

  render(){
    const {allUnderwritersFetch, uwFieldName} = this.props;

    if (allUnderwritersFetch.rejected) {
            return <div>Oops... Could not fetch Underwriters!</div>
        }

    if(allUnderwritersFetch.fulfilled) {
      return (
      <div>
        <Field name={uwFieldName} component={renderSelectField} label="Underwriter List">
           {allUnderwritersFetch.value.results.map(underwriter =>
          <MenuItem key={underwriter.name} value={underwriter.name} primaryText={underwriter.name}/>)}
        </Field>
      </div>
      )
    }

    return <div>Loading...</div>;
  }
}

// connect(): Declarative way to define the resource needed for this component
export default connect([{
    resource: 'allUnderwriters',
    request: {
        url: 'http://swapi.co/api/people/',
        contentType: 'application/json'
    }
}])(UnderwriterList);
/*

const renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom}/>
)

var underwriters = [{"name": "test", "fullname": "test"},{"name": "test2", "fullname": "test2"}];

fetch( 'http://swapi.co/api/people/?format=json')
      .then(response => response.json())
      .then((results) => {
        console.log(results)
        underwriters = results;
      })

const UnderwriterList = () => (
  <div>
    <Field name="underwriter" component={renderSelectField} label="Underwriter List">
      {underwriters.map((underwriter, i) =>
      <MenuItem key={i} value={underwriter.name} primaryText={underwriter.fullname}/>)}
    </Field>
  </div>
)

export default UnderwriterList


*/

/*import React from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';

// Action
const setUnderwriter = (id, value) => ({
  type: "SET_UW_SEARCH",
  id: {id},
  underwriter: {value}
})

let underwriters;

  fetch( 'http://swapi.co/api/people/')
      .then( response => response.json() )
      .then( json => { underwriters });

const UnderwriterList = ({ onChange }) => (
  <FormGroup
    controlId="underwriterlist"
    onSelect={setUnderwriter}>
    <FormControl componentClass="select" placeholder="select">
      {underwriters.map((underwriter, i) =>
      <option key={i} value={underwriter.name}>{underwriter.fullname}</option>)}
    </FormControl>
  </FormGroup>
)

export default UnderwriterList
*/
