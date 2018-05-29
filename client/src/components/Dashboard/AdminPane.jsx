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

const AdminPane = ({ classes }) => (
  <div>
    <Typography variant="headline" component="h3">
      Welcome admin!
    </Typography>
    <Typography component="p">
      Hello.
    </Typography>
  </div>
)

AdminPane.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AdminPane)
