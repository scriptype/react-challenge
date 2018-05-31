import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Auth from '../../helpers/Auth'

const styles = theme => ({
  messageContainer: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    margin: theme.spacing.unit * 3
  }),

  message: {
    padding: theme.spacing.unit * 2
  }
})

const MainPane = ({ classes, secretData }) => (
  <div>
    <Typography variant="headline" component="h3">
      Welcome { Auth.getUser().name }!
    </Typography>
    <Typography className={classes.message} component="p">
      { secretData }
    </Typography>
  </div>
)

MainPane.propTypes = {
  classes: PropTypes.object.isRequired,
  secretData: PropTypes.string.isRequired
}

export default withStyles(styles)(MainPane)
