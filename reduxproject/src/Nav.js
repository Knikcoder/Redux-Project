import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'


function Nav() {
  return (
    <div className='Navbar'>
    <ul className='nav'>
    <li className="nav-item">
    <Link >Sample Project</Link>
  </li>
  <li className="nav-item">
    <Link to='/'>Details Display</Link>
  </li>
  <li className="nav-item">
    <Link to='/details'>Enter Details</Link>
  </li>
</ul>
    </div>
  )
}

export default Nav