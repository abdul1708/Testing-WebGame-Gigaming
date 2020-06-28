import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// Component 
import Main from './components/pages/main/main'

// Layout 
import Header from './components/pages/layout/header'
import Footer from './components/pages/layout/footer'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <Header />
          <Route exact path='/' component={Main} />
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}
