import React from 'react'
import HomePage from './pages/HomePage'
import NavbarPage from './shared/navbar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './shared/footer/Footer'
import TopNavbar from './shared/navbar/TopNavbar'

const App = () => {
  return (
    <div>
      <TopNavbar/>
      <NavbarPage/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
