import React from 'react';
import SearchForm from '../searchsection/SearchForm';
import UpdateForm from '../updatesection/UpdateForm';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { loadData } from '../actions/data';

function obtainSearchData(values) {
  return function (dispatch) {
    return fetch('http://swapi.co/api/people/')
            .then( response => response.json() )
            .then( ({results: items}) => dispatch(loadData(items)))
  }
}

class MassRolloverTool extends React.Component {
  constructor(){
    super();
    this.searchSubmit = this.searchSubmit.bind(this);
    this.updateSubmit = this.updateSubmit.bind(this);
  }

  getChildContext() {
     return { muiTheme: getMuiTheme(baseTheme) };
  }

  searchSubmit(values, dispatch){
     dispatch(obtainSearchData(values))
  }

  updateSubmit(values, dispatch){
     dispatch(obtainSearchData(values))
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

export default MassRolloverTool
