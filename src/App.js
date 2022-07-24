// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'

import React, { Component } from 'react'
import News from './components/News';
// import NewsItem from './components/NewsItem';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <News/>
      </div>
    )
  }
}
