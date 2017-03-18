import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Col from 'react-bootstrap/lib/Col';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Radio from 'react-bootstrap/lib/Radio';
import UnderwriterDropDownList from './UnderwriterDropDownList';
import ProducerCodeInputField from './ProducerCodeInputField';
import EffectiveDateField from './EffectiveDateField';
import CannotChangeApplicationResultsTable from '../results/CannotChangeApplicationResultsTable';

class SearchSection extends React.Component {

  render(){
    return (
      <Form horizontal>
        <FormGroup controlId="underwriterProducercodeSelection">
          <Col componentClass={ControlLabel} sm={3}>
            Underwriter or Producer Code
          </Col>
          <Col sm={4}>
            <Radio name="searchSelection" value="underwriter" inline>Underwriter</Radio>
            <Radio name="searchSelection" value="producerCode" inline>Producer Code</Radio>
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={3}>
            Old Value:
          </Col>
          <Col sm={4}>
            <UnderwriterDropDownList/>
          </Col>
          <Col sm={3}>
            <ProducerCodeInputField/>
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={3}>
              Starting Eff. Date:
            </Col>
            <Col sm={7}>
               <EffectiveDateField/>
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={3}>
            New Value:
          </Col>
          <Col sm={4}>
            <UnderwriterDropDownList/>
          </Col>
          <Col sm={3}>
            <ProducerCodeInputField/>
          </Col>
        </FormGroup>
         <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={3}/>
          <Col sm={7}>
            <Button>
             Search
            </Button>
          </Col>
        </FormGroup>
        <CannotChangeApplicationResultsTable applications={[{applicationnumber:'1234', producercode: '1232132321', underwriter: 'TEster test', insuredname: 'The insured name', status: 'bound', effectivedate: '52/17/2015'}]}/>
      </Form>
    )
  }
}

export default SearchSection
