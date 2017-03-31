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
    const {allUnderwritersFetch, uwFieldName, label} = this.props;

    if (allUnderwritersFetch.rejected) {
            return <div>Oops... Could not fetch Underwriters!</div>
        }

    if(allUnderwritersFetch.fulfilled) {
      return (
      <div>
        <Field name={uwFieldName} component={renderSelectField} label={label}>
           {allUnderwritersFetch.value.map(underwriter =>
          <MenuItem key={underwriter.name} value={underwriter.name} primaryText={underwriter.fullname}/>)}
        </Field>
      </div>
      )
    }

    return <div>Loading...</div>;
  }
}

export default connect([{
    resource: 'allUnderwriters',
    request: {
        url: 'http://ecastil2:7001/services/UnderwriterService/UnderwriterList/',
        contentType: 'application/json'
    }
}])(UnderwriterList);
