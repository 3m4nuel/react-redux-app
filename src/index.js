import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import {middleware as fetchMiddleware} from 'react-redux-fetch'
import MassRolloverTool from './main/MassRolloverTool'
import reducers from './reducer/reducers'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin';
import thunk from 'redux-thunk';

injectTapEventPlugin();

const store = createStore(reducers, applyMiddleware(fetchMiddleware, thunk))

render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <MassRolloverTool />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
