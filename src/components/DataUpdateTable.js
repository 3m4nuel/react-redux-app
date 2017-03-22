import React from 'react'
import { Field } from 'redux-form'
import { Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn } from 'material-ui/Table'

let feeds = [{id:0,name:"joe"},{id:1,name:"john"},{id:2,name:"Brad"},{id:3,name:"Jack"},{id:4,name:"Andrew"},{id:5,name:"joe"},{id:6,name:"john"},{id:7,name:"Brad"},{id:8,name:"Jack"},{id:9,name:"Andrew"}]

const renderUpdateTable =({ input, ...rest }) => (
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

class DataUpdateTable extends React.Component {
  constructor(){
      super();
      this.handleRowSelection = this.handleRowSelection.bind(this);
  }

handleRowSelection(rowIds) {
    const selectedFeeds = [];
        console.log(rowIds.all);

    for(let i in rowIds) {
      selectedFeeds.push(feeds[i])
    }
    console.log(selectedFeeds);
  }

  render(){
    return (
      <div>
        <Field name="updatetable" onRowSelection={this.handleRowSelection} component={renderUpdateTable}/>
      </div>
      )
  }
}


export default DataUpdateTable


/*var onRowSelection = (input, key, event, value) => {
        const selectedFeeds = [];
        console.log(event);

        for(let i in key) {
          selectedFeeds.push(feeds[key[i]])
        }
}*/
/*
const onRowSelection = (input, key, event, value, target) => {
  console.log(target);
}

const renderUpdateTable = ({ input, label, meta: { touched, error }, ...custom }) => (
 <div>
 <br/>
 <h3>Applications Affected</h3>
 <Table
    multiSelectable={true}
    onChange={onRowSelection(target)}
    onRowSelection={ console.log(input) }>
    <TableHeader>
        <TableRow>
          <TableHeaderColumn>ID</TableHeaderColumn>
          <TableHeaderColumn>Name</TableHeaderColumn>
        </TableRow>
    </TableHeader>
    <TableBody>
    {feeds.map((user, i) =>
      <TableRow key={i} onChange={(event, index, value) => input.onChange(value)}>
        <TableRowColumn>{user.id}</TableRowColumn>
        <TableRowColumn>{user.name}</TableRowColumn>
      </TableRow>
      )}
    </TableBody>
 </Table>
 </div>
)

const DateUpdateTable = () => (
  <div>
    <Field name="updatetable" component={renderUpdateTable} label="Producer Code"/>
  </div>
)

export default DateUpdateTable
*/
