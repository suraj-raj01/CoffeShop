import React from 'react'
import TopNavbar from './TopNavbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <div>
      <TopNavbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
