import React from 'react'
import PropTypes from 'prop-types'
import { Link, IndexLink } from 'react-router'
import Auth from '../modules/Auth'

const Base = ({ children }) => (
  <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <IndexLink to="/">Cuttlesoft - React Challenge</IndexLink>
      </div>

      { Auth.isUserAuthenticated() ? (
        <div className="top-bar-right">
          <Link to="/logout">Logout</Link>
        </div>
      ) : (
        <div className="top-bar-right">
          <Link to="/signup">Sign up</Link>
          <Link to="/login">Login</Link>
        </div>
      ) }

    </div>

    { children }

  </div>
)

Base.propTypes = {
  children: PropTypes.object.isRequired
}

export default Base
