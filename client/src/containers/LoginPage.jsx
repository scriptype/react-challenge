import React from 'react'
import PropTypes from 'prop-types'
import LoginForm from '../components/LoginForm.jsx'
import Api from '../helpers/Api'
import Auth from '../helpers/Auth'
import Storage from '../helpers/Storage'

class LoginPage extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      errors: {},
      user: {
        email: '',
        password: ''
      },
      successMessage: this.props.location.query.signedUp
        ? Storage.get('signupSuccessMessage')
        : ''
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
    Api.login(this.state.user)
      .then(res => {
        this.setState({
          errors: {}
        })
        Auth.authenticateUser(res.token, res.user)
        this.context.router.replace('/')
      })
      .catch(errors => {
        console.log('errors', errors)
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
        user={this.state.user}
        successMessage={this.state.successMessage} />
    )
  }
}

LoginPage.contextTypes = {
  router: PropTypes.object.isRequired
}

LoginPage.propTypes = {
  location: PropTypes.object
}

export default LoginPage
