import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import "../styles/global.scss";

const Layout = ({ children }) => (
  <div className="container">
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
