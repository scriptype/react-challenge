import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const LoginForm = ({
  onSubmit,
  onChangeEmail,
  onChangePassword,
  user
}) => (
  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Login</h2>

      <div className="field-line">
        <TextField
          label="Email"
          name="email"
          type="email"
          onChange={onChangeEmail}
          value={user.email}
        />
      </div>

      <div className="field-line">
        <TextField
          label="Password"
          type="password"
          name="password"
          onChange={onChangePassword}
          value={user.password}
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
  user: PropTypes.object
}

export default LoginForm
