import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user
}) => (
  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Sign Up</h2>

      { errors.summary && <p className="error-message">{errors.summary}</p> }

      <div className="field-line">
        <TextField
          label="Name"
          name="name"
          errorText={errors.name}
          onChange={onChange}
          value={user.name}
        />
      </div>

      <div className="field-line">
        <TextField
          label="Email"
          name="email"
          errorText={errors.email}
          type="email"
          onChange={onChange}
          value={user.email}
        />
      </div>

      <div className="field-line">
        <TextField
          label="Password"
          type="password"
          name="password"
          onChange={onChange}
          errorText={errors.password}
          value={user.password}
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
  user: PropTypes.object.isRequired
}

export default SignUpForm
