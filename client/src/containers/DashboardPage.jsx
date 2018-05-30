import React from 'react'
import PropTypes from 'prop-types'
import Api from '../helpers/Api'
import Auth from '../helpers/Auth'
import { randomNumber } from '../helpers/utils'
import Dashboard from '../components/Dashboard/index.jsx'

class DashboardPage extends React.Component {
  /**
   * Class constructor.
   */
  constructor(props, context) {
    super(props, context)

    this.state = {
      secretData: '',
      userType: '',
      notifications: this.getRandomNotifications()
    }

    this.onReadNotification = this.onReadNotification.bind(this)
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

  getRandomNotifications() {
    const words = [
      'suspendisse', 'sit', 'amet', 'semper', 'ipsum', 'In',
      'eleifend', 'purus', 'et', 'egestas', 'blandit', 'aenean',
      'ac', 'ante', 'vel', 'urna', 'porttitor', 'ullamcorper',
      'curabitur', 'vitae', 'sapien', 'tincidunt', 'pretium',
      'ipsum', 'sit'
    ]

    const notificationCount = Math.round(randomNumber(2, 13))

    return [...Array(notificationCount).keys()].map(notification => {
      const wordCount = Math.round(randomNumber(5, 12))
      return {
        read: false,
        message: [...Array(wordCount).keys()]
          .map(word => (
            words[Math.floor(Math.random() * words.length)]
          ))
          .join(' ')
          .concat('.')
      }
    })
  }

  onReadNotification(index) {
    this.setState({
      notifications: this.state.notifications.map((notification, i) => {
        if (i === index) {
          return Object.assign({}, notification, {
            read: true
          })
        }
        return notification
      })
    })
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <Dashboard
        secretData={this.state.secretData}
        userType={this.state.userType}
        notifications={this.state.notifications}
        onReadNotification={this.onReadNotification} />
    )
  }
}

DashboardPage.contextTypes = {
  router: PropTypes.object.isRequired
}

export default DashboardPage
