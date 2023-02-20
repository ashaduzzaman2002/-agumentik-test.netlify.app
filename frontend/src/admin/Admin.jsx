import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './home/Home'
import Leads from './leads/Leads'
import Sidebar from './sidebar/Sidebar'
import Social from './social/Social'

const Admin = () => {
  const {pathname} = window.location
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('jwt')
    if(!token) return navigate('/admin/login')
  }, [])
  
  
  return (
    <div style={{display: 'flex', width: '100%'}}>
      {
        pathname !== '/admin/login' && <Sidebar />
      }
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/leads' element={<Leads />} />
        <Route path='/social' element={<Social />} />
      </Routes>
    </div>
  )
}

export default Admin