import React from 'react'
import LoginForm from '../components/LoginForm.jsx'
import api from '../helpers/api'

class LoginPage extends React.Component {
  constructor() {
    super()

    this.state = {
      errors: {},
      user: {
        email: '',
        password: ''
      }
    }

    this.onSubmit = this.processForm.bind(this)
    this.onChangeEmail = this.onChangeUser('email')
    this.onChangePassword = this.onChangeUser('password')
  }

  /**
   * Update user object.
   *
   * @param {string} key - name of the field to be updated.
   */
  onChangeUser(key) {
    return event => {
      const value = event.target.value
      this.setState({
        user: Object.assign({}, this.state.user, {
          [key]: value
        })
      })
    }
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    event.preventDefault()
    api.login(this.state.user)
      .then(res => {
        this.setState({
          errors: {}
        })
      })
      .catch(errors => {
        this.setState({
          errors
        })
      })
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <LoginForm
        onSubmit={this.onSubmit}
        onChangeEmail={this.onChangeEmail}
        onChangePassword={this.onChangePassword}
        errors={this.state.errors}
        user={this.state.user} />
    )
  }
}

export default LoginPage
