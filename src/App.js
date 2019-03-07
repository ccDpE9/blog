import { Component } from 'react';
import axios from 'axios';

import Header from './Header';
import Articles from './Articles';
import Contact from './Contact';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <main>
          <Header />
          <Articles />
          <Contact />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}

export default App;
