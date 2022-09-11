import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
  <nav className='nav-bar'>
    <div className="container">
      <ul>
        <li>
          <Link className='first' to="/">Home</Link>
        </li>
        <li>
          <Link to="/group-team-members">Teams</Link>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default Nav