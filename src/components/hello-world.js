import React, { Component } from 'react';
import logo from '../assets/svg/logo.svg';
import '../assets/css/app.css'


class HelloWorld extends Component {
  render() {
    return (
      <div className="HelloWorld">
          <header className="HelloWorld-header">
          <img src={logo} className="HelloWorld-logo" alt="logo" />
          <h1 className="HelloWorld-title">Welcome to React</h1>
          </header>
          <p className="HelloWorld-intro">
          To get started, edit <code>src/Component/HelloWorld.js</code> and save to reload.
          </p>
      </div>
    );
  }
}

export default HelloWorld
