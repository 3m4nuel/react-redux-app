import React from 'react';
import SearchForm from './SearchForm';
import UpdateForm from './UpdateForm';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const showResults = values =>
  new Promise(resolve => {
    setTimeout(() => {  // simulate server latency
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
      resolve()
    }, 500)
  })

class MassRolloverTool extends React.Component {

  getChildContext() {
     return { muiTheme: getMuiTheme(baseTheme) };
  }

  render(){
    return (
      <div>
      <SearchForm onSubmit={showResults}/>
      <UpdateForm onSubmit={showResults}/>
      </div>
    )
  }
}

MassRolloverTool.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default MassRolloverTool



/*import React from 'react';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Col from 'react-bootstrap/lib/Col';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

/* Custom Components */
/*import SearchOptions from './SearchOptions';
import UnderwriterList from './UnderwriterList';
import ProducerCodeField from './ProducerCodeField';
import EffectiveDateField from './EffectiveDateField';
import SearchButton from './SearchButton';

class MassRolloverTool extends React.Component {
  render(){
    return (
      <Form horizontal>
        <FormGroup controlId="searchOptions">
          <SearchOptions/>
        </FormGroup>

      </Form>
    )
  }
}

export default MassRolloverTool*/

/*
<FormGroup controlId="oldValue">
          <Col componentClass={ControlLabel} sm={3}>
            Old Value:
          </Col>
          <Col sm={4}>
            <UnderwriterList/>
          </Col>
          <Col sm={3}>
            <ProducerCodeField/>
          </Col>
        </FormGroup>
        <FormGroup controlId="effectiveDt">
          <Col componentClass={ControlLabel} sm={3}>
              Starting Eff. Date:
            </Col>
            <Col sm={7}>
               <EffectiveDateField/>
          </Col>
        </FormGroup>
        <FormGroup controlId="newValue">
          <Col componentClass={ControlLabel} sm={3}>
            New Value:
          </Col>
          <Col sm={4}>
            <UnderwriterList/>
          </Col>
          <Col sm={3}>
            <ProducerCodeField/>
          </Col>
        </FormGroup>
         <FormGroup controlId="search">
          <Col componentClass={ControlLabel} sm={3}/>
          <Col sm={7}>
            <SearchButton/>
          </Col>
        </FormGroup>

*/
