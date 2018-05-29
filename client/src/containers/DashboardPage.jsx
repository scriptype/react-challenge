import React from 'react'
import PropTypes from 'prop-types'
import Api from '../helpers/Api'
import Auth from '../helpers/Auth'
import Dashboard from '../components/Dashboard/index.jsx'

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
    Api.getDashboard()
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
