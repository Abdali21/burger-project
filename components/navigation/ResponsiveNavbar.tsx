"use client"
import { useState } from "react"
import MobileNavbar from "./MobileNavbar"
import Navbar from "./Navbar"

const ResponsiveNavbar = () => {

  const[showNav, setShowNav]= useState(false)
  const openNavHandler = () =>setShowNav(true)
  const closeNavHandler = () =>setShowNav(false)

  return (
    <div>
        <Navbar openNav={openNavHandler} />
        <MobileNavbar showNav={showNav} closeNav={closeNavHandler} />      
    </div>
  )
}

export default ResponsiveNavbar
