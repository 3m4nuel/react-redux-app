import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';
import { connect } from 'react-redux'

let FetchLoader = props => {
  const { isLoad } = props

  if(isLoad)
  {
    return(<LinearProgress mode="indeterminate" />)
  }
  else
  {
    return null
  }
}

const mapStateToProps = (state) => ({
  isLoad: state.fetchLoadReducer,
})

FetchLoader = connect(mapStateToProps)(FetchLoader)

export default FetchLoader;
