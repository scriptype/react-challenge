import React from 'react'
import { Link } from 'react-router'
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

const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user,
  classes
}) => (
  <Card className="container">
    <form action="/" onSubmit={onSubmit} className={classes.container}>
      <h2 className="card-heading">Sign Up</h2>

      { errors.summary && (
        <p className="error-message">
          { errors.summary }
        </p>
      ) }

      <div className={`field-line ${classes.field}`}>
        <TextField
          label="Name"
          name="name"
          error={!!errors.name}
          helperText={errors.name || ''}
          onChange={onChange}
          value={user.name}
          fullWidth
        />
      </div>

      <div className={`field-line ${classes.field}`}>
        <TextField
          label="Email"
          name="email"
          type="email"
          error={!!errors.email}
          helperText={errors.email || ''}
          onChange={onChange}
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
          onChange={onChange}
          value={user.password}
          fullWidth
        />
      </div>

      <div className="button-line">
        <Button
          variant="raised"
          type="submit"
          color="primary"
        >
          Create New Account
        </Button>
      </div>

      <p>Already have an account? <Link to={'/login'}>Log in</Link></p>
    </form>
  </Card>
)

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SignUpForm)
