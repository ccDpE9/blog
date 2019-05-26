import React from "react";

import Navbar from "./components/Navbar";
import Articles from "./components/Articles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Articles />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
