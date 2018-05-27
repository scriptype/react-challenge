import React from 'react'
import PropTypes from 'prop-types'
import { Link, IndexLink } from 'react-router'

const Base = ({ children }) => (
  <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <IndexLink to="/">Cuttlesoft - React Challenge</IndexLink>
      </div>

      <div className="top-bar-right">
        <Link to="/signup">Sign up</Link>
        <Link to="/login">Login</Link>
      </div>

    </div>

    { children }

  </div>
)

Base.propTypes = {
  children: PropTypes.object.isRequired
}

export default Base
