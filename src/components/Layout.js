import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Navigation from "./Navigation"
// import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div className="container" style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <Navigation />
      <main>{children}</main>
    </div>
  )
}

export default Layout
