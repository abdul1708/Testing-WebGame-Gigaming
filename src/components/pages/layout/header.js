import React, { Component } from 'react'

export default class header extends Component {
  render() {
    return (
      <header class="masthead mb-auto">
        <div class="inner">
          <h3 class="masthead-brand">Game RPS</h3>
          <nav class="nav nav-masthead justify-content-center">
            <a class="nav-link active" href="#">Home</a>
            <a class="nav-link" href="#">Features</a>
          </nav>
        </div>
      </header>
    )
  }
}
