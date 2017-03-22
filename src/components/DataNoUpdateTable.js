import React from 'react'
import { Field } from 'redux-form'
import { Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn } from 'material-ui/Table'

let feeds = [{id:0,name:"joe"},{id:1,name:"john"},{id:2,name:"Brad"},{id:3,name:"Jack"},{id:4,name:"Andrew"},{id:5,name:"joe"},{id:6,name:"john"},{id:7,name:"Brad"},{id:8,name:"Jack"},{id:9,name:"Andrew"}]

const renderUpdateTable =({ input, ...rest }) => (
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
      {feeds.map((user, i) =>
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
    const selectedFeeds = [];

    for(let i in rowIds) {
      selectedFeeds.push(feeds[rowIds[i]])
    }
    console.log(selectedFeeds);

  }

  render(){
    return (
      <div>
        <Field name="noupdatetable" onRowSelection={this.handleRowSelection} component={renderUpdateTable}/>
      </div>
      )
  }
}


export default DataNoUpdateTable
