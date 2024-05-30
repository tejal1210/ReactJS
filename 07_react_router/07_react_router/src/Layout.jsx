import React from 'react'
import Header from './componenets/Header/Header'
import Footer from './componenets/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
