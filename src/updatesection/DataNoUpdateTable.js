import React from 'react'
import { Field } from 'redux-form'
import { Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn } from 'material-ui/Table'

const renderUpdateTable =({ input, data, ...rest }) => (
 <div>
   <br/>
   <h4>The following applications will not be changed:</h4>
   <Table
      height='300px'
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
      {data.map((app, i) =>
        <TableRow key={i}>
           <TableRowColumn>{app.applicationNumber}</TableRowColumn>
          <TableRowColumn>{app.producerCode}</TableRowColumn>
          <TableRowColumn>{app.underwriter}</TableRowColumn>
          <TableRowColumn>{app.insuredName}</TableRowColumn>
          <TableRowColumn>{app.status}</TableRowColumn>
          <TableRowColumn>{app.effectiveDate}</TableRowColumn>
        </TableRow>
        )}
      </TableBody>
   </Table>
  </div>
  )

const DataNoUpdateTable = ({data}) => (
  <div>
      <Field name="noupdatetable" data={data} component={renderUpdateTable}/>
  </div>
  )

export default DataNoUpdateTable
