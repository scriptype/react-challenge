import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Badge from '@material-ui/core/Badge'
import DashboardIcon from '@material-ui/icons/Dashboard'
import SettingsIcon from '@material-ui/icons/Settings'
import MainPane from './MainPane.jsx'
import AdminPane from './AdminPane.jsx'

const styles = theme => ({
  container: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  }),
  pane: {
    padding: theme.spacing.unit * 6
  },
  badge: {
    padding: `0 ${theme.spacing.unit * 2}px`
  }
})

class Dashboard extends React.Component {
  constructor(props) {
    super(props)

    const self = this
    this.panes = [{
      pane: MainPane,
      get props() {
        return {
          secretData: self.props.secretData
        }
      }
    }, {
      pane: AdminPane,
      get props() {
        return {
          notifications: self.props.notifications,
          onReadNotification: self.props.onReadNotification
        }
      }
    }]

    this.state = {
      activePaneIndex: 0
    }
  }

  onChangePane(event, activePaneIndex) {
    this.setState({
      activePaneIndex
    })
  }

  adminTabHeader() {
    const { classes, notifications } = this.props
    const unReadNotifications = notifications.filter(n => !n.read)
    return (
      <Badge
        className={classes.badge}
        color="secondary"
        badgeContent={unReadNotifications.length}
      >
        ADMIN SECTION
      </Badge>
    )
  }

  render() {
    const { classes, userType } = this.props
    const { activePaneIndex } = this.state
    const activePane = this.panes[activePaneIndex]
    return (
      <Paper className={`container ${classes.container}`} elevation={2}>
        <Tabs
          value={activePaneIndex}
          onChange={this.onChangePane.bind(this)}
          fullWidth
          indicatorColor="secondary"
          textColor="secondary"
          centered
        >
          <Tab
            icon={<DashboardIcon />}
            label="DASHBOARD" />

          { userType === 'admin' && (
            <Tab
              icon={<SettingsIcon />}
              label={this.adminTabHeader()} />
          ) }
        </Tabs>
        <div className={classes.pane}>
          <activePane.pane {...activePane.props} />
        </div>
      </Paper>
    )
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  secretData: PropTypes.string.isRequired,
  userType: PropTypes.string.isRequired,
  notifications: PropTypes.array.isRequired,
  onReadNotification: PropTypes.func.isRequired
}

export default withStyles(styles)(Dashboard)
