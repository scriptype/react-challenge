import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  messageContainer: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    margin: theme.spacing.unit * 3
  }),

  notifTitle: {
    padding: theme.spacing.unit * 2
  },

  snackbar: {
    background: '#f5f5f5',
    color: '#333',
    marginBottom: theme.spacing.unit
  }
})

const AdminPane = ({ classes, notifications, onReadNotification }) => (
  <div>
    <Typography variant="headline" component="h3">
      Welcome admin!
    </Typography>

    <Typography className={classes.notifTitle} component="p">
      { notifications.some(n => !n.read) ? (
        'Notifications:'
      ) : (
        'No notifications.'
      ) }
    </Typography>

    { notifications.map(({ message, read }, index) => {
      return !read && (
        <SnackbarContent
          key={message.split(' ').join('-')}
          className={classes.snackbar}
          message={message}
          action={
            <Button
              color="secondary"
              size="small"
              onClick={onReadNotification.bind(null, index)}
            >
              OK
            </Button>
          }
        />
      )
    }) }
  </div>
)

AdminPane.propTypes = {
  classes: PropTypes.object.isRequired,
  notifications: PropTypes.array.isRequired,
  onReadNotification: PropTypes.func.isRequired
}

export default withStyles(styles)(AdminPane)
