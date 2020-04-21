import React from "react";
import { Link } from "gatsby";

const Header = () => (
  <header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="#Contact">Contact</Link>
    </nav>
  </header>
);

export default Header;
