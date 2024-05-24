import React from 'react'
import Navbar from '../../Sections/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../Sections/Footer/Footer'

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
