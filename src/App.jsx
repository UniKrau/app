import React, { Component } from 'react'
import Header from './components/Header'
import Middle from './components/Middle'
import Footer from './components/Footer'
import Products from './components/Products'
import Levelone from './components/Levelone'
import LevelT from './components/LevelT'
import Navbar from './components/Navbar'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Header/>
        <LevelT/>
        <Levelone/>
        <Products/>
        <Middle/>
        <Footer/>
      </div>
    )
  }
}
