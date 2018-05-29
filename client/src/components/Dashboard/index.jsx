import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import FavoriteIcon from '@material-ui/icons/Favorite'
import PersonPinIcon from '@material-ui/icons/PersonPin'
import MainPane from './MainPane.jsx'
import AdminPane from './AdminPane.jsx'

const styles = theme => ({
  container: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    margin: theme.spacing.unit * 3
  })
})

class Dashboard extends React.Component {
  constructor(props) {
    super(props)

    this.panes = [{
      pane: MainPane,
      get props() {
        return {
          secretData: props.secretData
        }
      }
    }, {
      pane: AdminPane,
      props: {}
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

  render() {
    const { classes, secretData, userType } = this.props
    const { activePaneIndex } = this.state
    const activePane = this.panes[activePaneIndex]
    return (
      <Paper className={classes.container} elevation={4}>
        { userType === 'admin' ? (
          <div>
            <Tabs
              value={activePaneIndex}
              onChange={this.onChangePane.bind(this)}
              fullWidth
              indicatorColor="secondary"
              textColor="secondary"
            >
              <Tab icon={<FavoriteIcon />} label="DASHBOARD" />
              <Tab icon={<PersonPinIcon />} label="ADMIN SECTION" />
            </Tabs>
            <activePane.pane {...activePane.props} />
          </div>
        ) : (
          <MainPane secretData={secretData} />
        ) }
      </Paper>
    )
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  secretData: PropTypes.string.isRequired,
  userType: PropTypes.string.isRequired
}

export default withStyles(styles)(Dashboard)
