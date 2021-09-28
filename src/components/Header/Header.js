import React, { Component } from "react";
import Head from '../Head'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <span>LOGO</span>
        <nav>
          <ul className="header--ul">
            <li>Home</li>
            <li>Login</li>
          </ul>
        </nav>
        <Head />
      </header>
    )
  }
}

export default Header;
