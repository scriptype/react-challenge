import React from 'react'
import PropTypes from 'prop-types'
import validator from 'validator'
import SignUpForm from '../components/SignUpForm.jsx'
import api from '../helpers/api'

class SignUpPage extends React.Component {
  /**
   * Class constructor.
   */
  constructor(props, context) {
    super(props, context)

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        email: '',
        name: '',
        password: ''
      }
    }

    this.processForm = this.processForm.bind(this)
    this.onChangeUser = this.onChangeUser.bind(this)
  }

  validate(key, value) {
    switch (key) {
      case 'name':
        return {
          rules: [
            validator.isAlphanumeric,
            validator.isLowercase
          ],
          get isValid() {
            return this.rules.every(rule => rule.call(validator, value))
          },
          get message() {
            if (!this.isValid) {
              return 'Name should be lowercase and alphanumeric.'
            }
            return ''
          }
        }

      case 'email':
        return { }

      case 'password':
        return { }
    }
  }

  hasErrors() {
    return Object.keys(this.state.errors)
      .filter(key => key !== 'summary')
      .some(key => this.state.errors[key])
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  onChangeUser(event) {
    const key = event.target.name
    const value = event.target.value

    const { message } = this.validate(key, value)
    this.setState({
      errors: Object.assign(this.state.errors, {
        [key]: message || ''
      })
    })

    this.setState({
      user: Object.assign(this.state.user, {
        [key]: value
      })
    })
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    event.preventDefault()

    if (this.hasErrors()) {
      return false
    }

    api.signUp(this.state.user)
      .then(res => {
        this.setState({
          errors: {}
        })

        // set a message
        localStorage.setItem('successMessage', res.message)

        // make a redirect
        this.context.router.replace('/login')
      })
      .catch(errors => {
        this.setState({
          errors
        })
      })
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <SignUpForm
        onSubmit={this.processForm}
        onChange={this.onChangeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    )
  }
}

SignUpPage.contextTypes = {
  router: PropTypes.object.isRequired
}

export default SignUpPage
