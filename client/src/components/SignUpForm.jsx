import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const SignUpForm = ({
  onSubmit,
  onChange,
  user
}) => (
  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Sign Up</h2>

      <div className="field-line">
        <TextField
          label="Name"
          name="name"
          onChange={onChange}
          value={user.name}
        />
      </div>

      <div className="field-line">
        <TextField
          label="Email"
          name="email"
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
    </form>
  </Card>
)

SignUpForm.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  user: PropTypes.object
}

export default SignUpForm
