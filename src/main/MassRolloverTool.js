import React from 'react';
import SearchForm from '../searchsection/SearchForm';
import UpdateForm from '../updatesection/UpdateForm';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { loadNoUpdateData, loadUpdateData, setIsDeselect, setIsNotSubmittable, setUpdateOccured, setLoading, setSearchInfo} from '../actions/data';
import Store from '../main/Store'

function updateApplications(selectedData, searchInfo) {
    let bodyReq = []
    selectedData.forEach(function(selected) {
      bodyReq.push({
        updateUser: document.getElementById('agentid').value,
        updateOption: searchInfo.searchoption,
        applicationNumber: selected.applicationNumber,
        producerCd: searchInfo.producercodenew,
        underwriter: searchInfo.underwriternew,
        beforeUpdateInfo:
        {
          applicationNumber: selected.applicationNumber,
          producerCd: selected.producerCode,
          underwriter: selected.underwriter,
          insuredName: selected.insuredName,
          status: selected.status,
          effectiveDate: selected.effectiveDate,
        }
      })
    })
Store.dispatch(setLoading(true))
return fetch('http://ecastil2:7001/services/SubmittedApplicationService/Applications/Update', {
              method: 'POST',
              body: JSON.stringify(bodyReq)
              })
            .then(response => response.json())
            .then( json => {
              Store.dispatch(loadUpdateData(json))
              Store.dispatch(setIsDeselect(true))
              Store.dispatch(setIsNotSubmittable(true))
              Store.dispatch(setUpdateOccured(true))
              Store.dispatch(setLoading(false))
            })
}

function isNotBound(app) {
  return app.status !== 'Bound'
}

function isBound(app) {
  return app.status === 'Bound'
}

function obtainSearchData(values) {
  return function () {
    Store.dispatch(setLoading(true))
            return fetch('http://ecastil2:7001/services/SubmittedApplicationService/Applications/List', {
              method: 'POST',
              body: JSON.stringify({
                searchOption: values.searchoption,
                agentId: document.getElementById('agentid').value,
                lobCd: 'WORK',
                beforeEffectiveDt: values.effectiveDate,
                producerCd: values.producercodeold,
                underwriter: values.underwriterold
              })
            })
            .then(response => response.json())
            .then( json => {
              Store.dispatch(loadNoUpdateData(json.filter(isBound)))
              Store.dispatch(loadUpdateData(json.filter(isNotBound)))
              Store.dispatch(setIsDeselect(false))
              Store.dispatch(setUpdateOccured(false))
              Store.dispatch(setLoading(false))
              window.alert(Object.keys(json).length + ' applications found.')
            })
  }
}


class MassRolloverTool extends React.Component {
  getChildContext() {
     return { muiTheme: getMuiTheme(baseTheme) };
  }

  searchSubmit(values, dispatch){
    Store.dispatch(setSearchInfo(values))
    dispatch(obtainSearchData(values))
  }

  updateSubmit(){
    const selectedData = Store.getState().selectedDataReducer
    const searchInfo = Store.getState().searchReducer
    updateApplications(selectedData, searchInfo)
  }

  render(){
    return (
      <div>
      <SearchForm onSubmit={this.searchSubmit}/>
      <UpdateForm onSubmit={this.updateSubmit}/>
      </div>
    )
  }
}

MassRolloverTool.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default MassRolloverTool;
