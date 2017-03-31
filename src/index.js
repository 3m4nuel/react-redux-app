import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import MassRolloverTool from './main/MassRolloverTool'
import Store from './main/Store'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

render(
  <Provider store={Store}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <MassRolloverTool />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
