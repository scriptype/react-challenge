import React from 'react'
import LoginForm from '../components/LoginForm.jsx'

class LoginPage extends React.Component {
  constructor() {
    super()

    this.state = {
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
    // prevent default action. in this case, action is the form submission event
    event.preventDefault()

    // create a string for an HTTP body message
    const email = encodeURIComponent(this.state.user.email)
    const password = encodeURIComponent(this.state.user.password)
    const formData = `email=${email}&password=${password}`

    // create an AJAX request
    const xhr = new XMLHttpRequest()
    xhr.open('post', '/auth/login')
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    xhr.responseType = 'json'
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success
        console.log({ email, password })
      }
    })
    xhr.send(formData)
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
        user={this.state.user} />
    )
  }
}

export default LoginPage
