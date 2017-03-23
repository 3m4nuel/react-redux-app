import React from 'react'
import { Field } from 'redux-form'
import { Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn } from 'material-ui/Table'

const renderUpdateTable =({ input, data, ...rest }) => (
 <div>
   <br/>
   <h4>Applications Affected</h4>
   <Table
      multiSelectable={true}
      {...rest}>
      <TableHeader>
          <TableRow>
            <TableHeaderColumn>App #</TableHeaderColumn>
            <TableHeaderColumn>Producer Code</TableHeaderColumn>
            <TableHeaderColumn>Underwriter</TableHeaderColumn>
            <TableHeaderColumn>Insured Name</TableHeaderColumn>
            <TableHeaderColumn>Status</TableHeaderColumn>
            <TableHeaderColumn>Effective Date</TableHeaderColumn>
          </TableRow>
      </TableHeader>
      <TableBody>
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

class DataUpdateTable extends React.Component {
  constructor(){
      super();
      this.handleRowSelection = this.handleRowSelection.bind(this);
  }

handleRowSelection(rowIds, data) {
  }

  render(){
    const {data} = this.props;
    return (
      <div>
        <Field data={data} name="updatetable" onRowSelection={this.handleRowSelection(data)} component={renderUpdateTable}/>
      </div>
      )
  }
}

export default DataUpdateTable
