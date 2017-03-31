import React from 'react'
import { Field } from 'redux-form'
import { Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn } from 'material-ui/Table'
import { setUpdateData, setIsNotSubmittable } from '../actions/data';
import Store from '../main/Store';

let applications = []

function onRowSelection(rowIds) {
  let updateData = []

  if(rowIds === 'all') {
    applications.forEach(function(app) {
      updateData.push(app)
    })
    Store.dispatch(setIsNotSubmittable(false))
  } else if (rowIds === 'none' || rowIds.length === 0) {
    Store.dispatch(setIsNotSubmittable(true))
  } else {
    rowIds.forEach(function(row) {
      updateData.push(applications[row])
    })
    Store.dispatch(setIsNotSubmittable(false))
  }
  Store.dispatch(setUpdateData(updateData))
}

const renderUpdateTable =({ input, applications, isDeselect, ...rest }) => (
 <div>
   <br/>
   <h4>Applications Affected</h4>
   <Table
      height='500px'
      onRowSelection={onRowSelection}
      multiSelectable={true}
      >
      <TableHeader>
          <TableRow>
            <TableHeaderColumn>App #</TableHeaderColumn>
            <TableHeaderColumn>Producer Code</TableHeaderColumn>
            <TableHeaderColumn>Underwriter</TableHeaderColumn>
            <TableHeaderColumn>Insured Name</TableHeaderColumn>
            <TableHeaderColumn>Status</TableHeaderColumn>
            <TableHeaderColumn>Effective Date</TableHeaderColumn>
            <TableHeaderColumn>Update Message</TableHeaderColumn>
          </TableRow>
      </TableHeader>
      <TableBody deselectOnClickaway={isDeselect}>
      {applications.map((app, i) =>
        <TableRow key={i} className={JSON.stringify(app.applicationNumber)}>
          <TableRowColumn>{app.applicationNumber}</TableRowColumn>
          <TableRowColumn>{app.producerCode}</TableRowColumn>
          <TableRowColumn>{app.underwriter}</TableRowColumn>
          <TableRowColumn>{app.insuredName}</TableRowColumn>
          <TableRowColumn>{app.status}</TableRowColumn>
          <TableRowColumn>{app.effectiveDate}</TableRowColumn>
          <TableRowColumn>{app.message}</TableRowColumn>
        </TableRow>
        )}
      </TableBody>
   </Table>
  </div>
  )

const DataUpdateTable = ({data, isDeselect}) => {
  if(Object.keys(data).length > 0) {
    applications = data
  } else {
    applications = []
  }
  return (
  <div>
      <Field name="noupdatetable" applications={applications} isDeselect={isDeselect} component={renderUpdateTable}/>
  </div>
  )}

export default DataUpdateTable
