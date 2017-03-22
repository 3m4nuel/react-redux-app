import { connect } from 'react-redux'
import UpdateForm from '../updatesection/UpdateForm';

//export const SET_SEARCH_DATA = 'SET_SEARCH_DATA'
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const getResults = values => {
  console.log(values)
  return sleep(500).then(() => {
    return [{id:0,name:"joe"},{id:1,name:"john"},{id:2,name:"Brad"},{id:3,name:"Jack"},{id:4,name:"Andrew"},{id:5,name:"joe"},{id:6,name:"john"},{id:7,name:"Brad"},{id:8,name:"Jack"},{id:9,name:"Andrew"}]
  })
}


const mapStateToProps = (state, ownProps) => ({
  data: state.searchresults
})


const SearchData = connect(
  mapStateToProps,
 // mapDispatchToProps
)(UpdateForm)

export default SearchData
