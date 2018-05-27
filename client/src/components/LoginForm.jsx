import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  field: {
    width: 250
  }
})

const LoginForm = ({
  onSubmit,
  onChangeEmail,
  onChangePassword,
  errors,
  user,
  classes
}) => (
  <Card className="container">
    <form action="/" onSubmit={onSubmit} className={classes.container}>
      <h2 className="card-heading">Login</h2>

      <div className={`field-line ${classes.field}`}>
        <TextField
          label="Email"
          name="email"
          type="email"
          error={!!errors.email}
          helperText={errors.email || ''}
          onChange={onChangeEmail}
          value={user.email}
          fullWidth
        />
      </div>

      <div className={`field-line ${classes.field}`}>
        <TextField
          label="Password"
          type="password"
          name="password"
          error={!!errors.password}
          helperText={errors.password || ''}
          onChange={onChangePassword}
          value={user.password}
          fullWidth
        />
      </div>

      <div className="button-line">
        <Button variant="raised" type="submit" color="primary">
          Login
        </Button>
      </div>
    </form>
  </Card>
)

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
  onChangeEmail: PropTypes.func,
  onChangePassword: PropTypes.func,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object,
  classes: PropTypes.object
}

export default withStyles(styles)(LoginForm)
