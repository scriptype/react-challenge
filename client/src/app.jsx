import React from 'react'
import ReactDom from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { browserHistory, Router } from 'react-router'
import routes from './routes.js'

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin()

ReactDom.render((
  <MuiThemeProvider theme={createMuiTheme()}>
    <Router history={browserHistory} routes={routes} />
  </MuiThemeProvider>), document.getElementById('react-app')
)
