import React from 'react'
import PropTypes from 'prop-types'
import api from '../helpers/api'
import Dashboard from '../components/Dashboard.jsx'

class DashboardPage extends React.Component {
  /**
   * Class constructor.
   */
  constructor(props, context) {
    super(props, context)

    this.state = {
      secretData: ''
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
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <Dashboard secretData={this.state.secretData} />
    )
  }
}

DashboardPage.contextTypes = {
  router: PropTypes.object.isRequired
}

export default DashboardPage
