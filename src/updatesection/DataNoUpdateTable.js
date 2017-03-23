import React from 'react'
import { Field } from 'redux-form'
import { Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn } from 'material-ui/Table'

const renderUpdateTable =({ input, data, ...rest }) => (
 <div>
   <br/>
   <h4>The following applications will not be changed:</h4>
   <Table
      multiSelectable={true}
      {...rest}>
      <TableHeader  displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn>App #</TableHeaderColumn>
            <TableHeaderColumn>Producer Code</TableHeaderColumn>
            <TableHeaderColumn>Underwriter</TableHeaderColumn>
            <TableHeaderColumn>Insured Name</TableHeaderColumn>
            <TableHeaderColumn>Status</TableHeaderColumn>
            <TableHeaderColumn>Effective Date</TableHeaderColumn>
          </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
      {data.map((user, i) =>
        <TableRow key={i}>
           <TableRowColumn>{user.id}</TableRowColumn>
          <TableRowColumn>{user.name}</TableRowColumn>
          <TableHeaderColumn>Underwriter</TableHeaderColumn>
          <TableHeaderColumn>Insured Name</TableHeaderColumn>
          <TableHeaderColumn>Status</TableHeaderColumn>
          <TableHeaderColumn>Effective Date</TableHeaderColumn>
        </TableRow>
        )}
      </TableBody>
   </Table>
  </div>


  )

class DataNoUpdateTable extends React.Component {
  constructor(){
      super();
      this.handleRowSelection = this.handleRowSelection.bind(this);
  }

handleRowSelection(rowIds) {


  }

  render(){
    const {data} = this.props;
    return (
      <div>
        <Field name="noupdatetable" data={data} onRowSelection={this.handleRowSelection} component={renderUpdateTable}/>
      </div>
      )
  }
}


export default DataNoUpdateTable
