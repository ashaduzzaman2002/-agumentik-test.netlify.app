import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className='admin_sidebar'>
        <ul>
          <li>
            <Link to='/admin' >Home</Link>
          </li>

          <li>
            <Link to='/admin/leads' >Leads</Link>
          </li>

          <li>
            <Link to='/admin/social' >Social</Link>
          </li>

          <li>
            <Link to='/admin/sidebar' >Sidebar</Link>
          </li>

          <li>
            <Link to='/admin/home-landing' >Home Langding</Link>
          </li>

          <li>
            <Link to='/admin/contact' >Contact</Link>
          </li>
        </ul>
    </div>
  )
}

export default Sidebar