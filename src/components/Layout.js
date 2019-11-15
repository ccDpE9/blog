import React from "react"

import Navigation from "./Navigation"
import Footer from "./Footer"

import "../styles/global.scss"

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
