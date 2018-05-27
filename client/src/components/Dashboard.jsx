import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  messageContainer: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    margin: theme.spacing.unit * 3
  })
})

const Dashboard = ({ classes, secretData }) => (
  <Paper className={classes.messageContainer} elevation={4}>
    <Typography variant="headline" component="h3">
      Secret Data
    </Typography>
    <Typography component="p">
      { secretData }
    </Typography>
  </Paper>
)

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  secretData: PropTypes.string.isRequired
}

export default withStyles(styles)(Dashboard)
