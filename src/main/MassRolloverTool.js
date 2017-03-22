import React from 'react';
import { change } from 'redux-form'
import SearchData from '../containers/SearchData';
import SearchForm from '../searchsection/SearchForm';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { setSearchData } from '../actions'
//import { SET_SEARCH_DATA } from '../containers/SearchData'


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function getResults(values){
  console.log(values)
  return sleep(500).then(() => {
    return [{id:0,name:"joe"},{id:1,name:"john"},{id:2,name:"Brad"},{id:3,name:"Jack"},{id:4,name:"Andrew"},{id:5,name:"joe"},{id:6,name:"john"},{id:7,name:"Brad"},{id:8,name:"Jack"},{id:9,name:"Andrew"}]
  })
}

const showResults = values =>
  new Promise(resolve => {
    setTimeout(() => {  // simulate server latency
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
      change('UpdateForm', setSearchData('[{id:0,name:"joe"},{id:1,name:"john"},{id:2,name:"Brad"},{id:3,name:"Jack"},{id:4,name:"Andrew"},{id:5,name:"joe"},{id:6,name:"john"},{id:7,name:"Brad"},{id:8,name:"Jack"},{id:9,name:"Andrew"}]'))
      resolve()
    }, 500)
  })

class MassRolloverTool extends React.Component {
  constructor(){
    super();
    this.state = {searchresults: [] }
    this.submit = this.submit.bind(this)
  }

  getChildContext() {
     return { muiTheme: getMuiTheme(baseTheme) };
  }

  submit(values){
    this.setState({searchresults: getResults(values)})
    console.log(this.state.searchresults)
  }

  render(){

    return (
      <div>
      <SearchForm onSubmit={this.submit}/>
      <SearchData data={this.state.searchresults} onSubmit={this.submit}/>
      </div>
    )
  }
}

MassRolloverTool.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default MassRolloverTool
