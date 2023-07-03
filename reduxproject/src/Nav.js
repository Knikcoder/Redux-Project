import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
    <ul class="nav">
  <li class="nav-item">
    <Link to='/'>Details Display</Link>
  </li>
  <li class="nav-item">
    <Link to='/details'>Enter Details</Link>
  </li>
</ul>
    </div>
  )
}

export default Nav