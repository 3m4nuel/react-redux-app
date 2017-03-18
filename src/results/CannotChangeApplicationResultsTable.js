import React from 'react';
import Table from 'react-bootstrap/lib/Table';

class CannotChangeApplicationResultsTable extends React.Component {
  constructor(){
    super();
    this.state = {producerCode: '', applications:[]};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({producerCode: event.target.value})
  }

  render(){
    return (
      <div>
        <p><b>The following applications will not be changed:</b></p>
        <Table>
            <thead>
            <tr>
              <th>Select</th>
              <th>App #</th>
              <th>Producer Code</th>
              <th>Underwriter</th>
              <th>Insured Name</th>
              <th>Status</th>
              <th>Effective Date</th>
            </tr>
          </thead>
          <tbody>
            {this.state.applications.map((applications, i) =>
                <tr key={i}>
                  <td></td>
                  <td value={applications.applicationnumber}>{applications.applicationnumber}</td>
                  <td value={applications.producercode}>{applications.producercode}</td>
                  <td value={applications.underwriter}>{applications.underwriter}</td>
                  <td value={applications.insuredname}>{applications.insuredname}</td>
                  <td value={applications.status}>{applications.status}</td>
                  <td value={applications.effectivedate}>{applications.effectivedate}</td>
                </tr>
            )}
          </tbody>
        </Table>
      </div>
      )
  }
}

CannotChangeApplicationResultsTable.propTypes = {
  applications: React.PropTypes.array
}

CannotChangeApplicationResultsTable.defaultProps = {
  applications: [{applicationnumber:'1234', producercode: '1232132321', underwriter: 'TEster test', insuredname: 'The insured name', status: 'bound', effectivedate: '52/17/2015'}]
}

export default CannotChangeApplicationResultsTable
