import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';

// Creating first class based component
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <News/>
      </>
    )
  }
}

