import React from 'react'
import PropTypes from 'prop-types'
import api from '../helpers/api'
import Auth from '../modules/Auth'
import Dashboard from '../components/Dashboard.jsx'

class DashboardPage extends React.Component {
  /**
   * Class constructor.
   */
  constructor(props, context) {
    super(props, context)

    this.state = {
      secretData: '',
      userType: ''
    }
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    api.getDashboard()
      .then(res => {
        this.setState({
          secretData: res.message
        })
      })
      .catch(error => {
        console.error('error', error)
        this.context.router.replace('/logout')
      })

    this.setState({
      userType: Auth.isUserAdmin() ? 'admin' : 'user'
    })
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <Dashboard
        secretData={this.state.secretData}
        userType={this.state.userType} />
    )
  }
}

DashboardPage.contextTypes = {
  router: PropTypes.object.isRequired
}

export default DashboardPage
