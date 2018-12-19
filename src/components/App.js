import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// react-redux: gives us a way to pull Redux's state into React as props
import { connect } from 'react-redux';


import Header from "./Header";
import About from "./About";
import Articles from "./Articles";
import Bookmarks from "./Bookmarks";
import Footer from "./Footer";


class App extends Component {
  render() {
    const pathname = window.location.pathname;
    return (
      <div>
        { !pathname.includes('editor')
            ? <Header />
            : ''
        }
      </div>
    );
  }
}

export default App;

