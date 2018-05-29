import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  messageContainer: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    margin: theme.spacing.unit * 3
  })
})

const MainPane = ({ classes }) => (
  <div>
    <Typography variant="headline" component="h3">
      Welcome user!
    </Typography>
    <Typography component="p">
      hey.
    </Typography>
  </div>
)

MainPane.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MainPane)
